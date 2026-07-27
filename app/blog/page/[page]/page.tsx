// app/blog/page/[page]/page.tsx
import {
  getPostsPaginated,
  getAllAuthors,
  getAllTags,
  getAllCategories,
  searchAuthors,
  searchTags,
  searchCategories,
} from "@/lib/wordpress";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Section, Container, Prose } from "@/components/craft";
import { PostCard } from "@/components/posts/post-card";
import { FilterPosts } from "@/components/posts/filter";
import { SearchInput } from "@/components/posts/search-input";

import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;

// ============================================
// تولید استاتیک برای تمام صفحات
// ============================================
export async function generateStaticParams() {
  try {
    const { headers } = await getPostsPaginated(1, 9);
    const totalPages = headers.totalPages || 1;
    
    // محدود کردن به ۵۰ صفحه برای جلوگیری از build بیش از حد
    const maxPages = Math.min(totalPages, 50);
    
    return Array.from({ length: maxPages }, (_, i) => ({
      page: String(i + 1),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [{ page: '1' }];
  }
}
export const dynamicParams = true; // اجازه صفحات داینامیک بیشتر از ۵۰

// ============================================
// متادیتا
// ============================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const pageNumber = parseInt(page, 10);
  
  if (isNaN(pageNumber) || pageNumber < 1) {
    return {};
  }
  
  return {
    title: `وبلاگ - صفحه ${pageNumber}`,
    description: `مطالب وبلاگ - صفحه ${pageNumber}`,
  };
}

// ============================================
// کامپوننت اصلی
// ============================================
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ page: string }>;
  searchParams: Promise<{
    author?: string;
    tag?: string;
    category?: string;
    search?: string;
  }>;
}) {
  // دریافت پارامترها
  const { page } = await params;
  const search = await searchParams;
  
  const pageNumber = parseInt(page, 10);
  
  // اعتبارسنجی شماره صفحه
  if (isNaN(pageNumber) || pageNumber < 1) {
    notFound();
    return null;
  }
  
  const { author, tag, category, search: searchQuery } = search;
  const postsPerPage = 9;

  // واکشی داده‌ها
  const [postsResponse, authors, tags, categories] = await Promise.all([
    getPostsPaginated(pageNumber, postsPerPage, { author, tag, category, search: searchQuery }),
    searchQuery ? searchAuthors(searchQuery) : getAllAuthors(),
    searchQuery ? searchTags(searchQuery) : getAllTags(),
    searchQuery ? searchCategories(searchQuery) : getAllCategories(),
  ]);

  const { data: posts, headers } = postsResponse;
  const { total, totalPages } = headers;

  // اگر صفحه درخواستی وجود نداشت، خطای 404
  if (pageNumber > totalPages && totalPages > 0) {
    notFound();
    return null;
  }

  // ============================================
  // تابع ساخت URL به سبک وردپرس
  // ============================================
  const createWpUrl = (newPage?: number, preserveFilters: boolean = true) => {
    // ساخت مسیر پایه
    let basePath = '/blog';
    if (newPage && newPage > 1) {
      basePath = `/blog/page/${newPage}`;
    }
    
    // اضافه کردن فیلترها (اگه وجود داشته باشن)
    if (preserveFilters) {
      const params = new URLSearchParams();
      if (category) params.set("category", category);
      if (author) params.set("author", author);
      if (tag) params.set("tag", tag);
      if (searchQuery) params.set("search", searchQuery);
      
      const queryString = params.toString();
      return queryString ? `${basePath}?${queryString}` : basePath;
    }
    
    return basePath;
  };

  // ============================================
  // رندر JSX
  // ============================================
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <Prose>
            <h2>همه نوشته‌ها</h2>
            <p className="text-muted-foreground">
              {total} {total === 1 ? "نوشته" : "نوشته"} یافت شد
              {searchQuery && ` مطابق با جستجوی "${searchQuery}"`}
            </p>
          </Prose>

          <div className="space-y-4">
            <SearchInput defaultValue={searchQuery} />

            <FilterPosts
              authors={authors}
              tags={tags}
              categories={categories}
              selectedAuthor={author}
              selectedTag={tag}
              selectedCategory={category}
            />
          </div>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-4">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="h-24 w-full border rounded-lg bg-accent/25 flex items-center justify-center">
              <p>هیچ نوشته‌ای یافت نشد</p>
            </div>
          )}

          {/* ============================================
              صفحه‌بندی به سبک وردپرس
              ============================================ */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center py-8">
              <Pagination>
                <PaginationContent>
                  {/* دکمه قبلی */}
                  {pageNumber > 1 && (
                    <PaginationItem>
                      <PaginationPrevious href={createWpUrl(pageNumber - 1)} />
                    </PaginationItem>
                  )}

                  {/* اعداد صفحات */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((pageNum) => {
                      return (
                        pageNum === 1 ||
                        pageNum === totalPages ||
                        Math.abs(pageNum - pageNumber) <= 1
                      );
                    })
                    .map((pageNum, index, array) => {
                      const showEllipsis =
                        index > 0 && pageNum - array[index - 1] > 1;
                      return (
                        <div key={pageNum} className="flex items-center">
                          {showEllipsis && <span className="px-2">...</span>}
                          <PaginationItem>
                            <PaginationLink
                              href={createWpUrl(pageNum)}
                              isActive={pageNum === pageNumber}
                            >
                              {pageNum}
                            </PaginationLink>
                          </PaginationItem>
                        </div>
                      );
                    })}

                  {/* دکمه بعدی */}
                  {pageNumber < totalPages && (
                    <PaginationItem>
                      <PaginationNext href={createWpUrl(pageNumber + 1)} />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}