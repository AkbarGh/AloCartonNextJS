// ایمپورت توابع مورد نیاز از وردپرس
import { getRecentPosts } from "@/lib/wordpress";
import Link from "next/link";
import Image from "next/image";

// این صفحه صفحه اصلی سایت هست
export default async function Home() {
  
  return (
    <div>
    <header>
      <nav className="navbar navbar-expand-lg fixed-top" aria-label="منوی اصلی">
  <div className="container">
    {/* لوگو */}
    <a className="navbar-brand p-0" href="/" aria-label="رفتن به صفحه اصلی">
      <img
        src="https://www.alocarton.com/wp-content/uploads/2023/10/white-logo.webp"
        alt="کارتن اسباب کشی"
        width="120"
        height="51"
        fetchPriority="high"
      />
    </a>

    {/* دکمه همبرگر */}
    <button
      className="navbar-toggler navbar-dark border-0 d-lg-none"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
      aria-expanded="false"
      aria-label="باز و بسته کردن منو"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* منوی دسکتاپ */}
<div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
  <ul className="navbar-nav gap-2 me-0"> {/* me-0 اضافه شد */}
    <li className="nav-item">
      <a className="nav-link text-white fw-semibold active" aria-current="page" href="/">
        صفحه اصلی
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white fw-semibold" href="/invoice">
        سفارش آنلاین
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white fw-semibold" href="/blog">
        مقالات آموزشی
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white fw-semibold" href="/about">
        آشنایی بیشتر با الوکارتن!
      </a>
    </li>
  </ul>
</div>

    {/* منوی موبایل */}
    <div
      className="offcanvas offcanvas-start d-lg-none"
      tabIndex={-1}
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header border-bottom">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
          منوی سایت
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="بستن منو"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav flex-grow-1 gap-2">
          <li className="nav-item">
            <a className="nav-link fw-semibold active" aria-current="page" href="/">
              صفحه اصلی
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-semibold" href="/about">
              درباره ما
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-semibold" href="/contact">
              تماس با ما
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-semibold" href="/blog">
              وبلاگ
            </a>
          </li>
        </ul>
        <hr className="my-4" />
        <form className="d-flex mt-3" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="جستجو..."
            aria-label="جستجو در سایت"
            name="s"
          />
          <button className="btn btn-outline-primary" type="submit">
            جستجو
          </button>
        </form>
      </div>
    </div>
  </div>
</nav>
    </header>
    <main>
      {/* <!-- Hero --> */}
      <div className="pt-5 hero">
        <div className="container py-5 row flex-lg-row-reverse mx-auto">
          <div className="col-lg-6 mt-lg-5">
            <img
              src="https://www.alocarton.com/wp-content/uploads/2024/05/BoxDelivery-new.webp"
              className="img-fluid"
              alt="الوکارتن"
              title="الوکارتن"
              width="700"
              height="500"
              fetchPriority="high"
            />
          </div>
          <div className="col-lg-6 mt-lg-5">
            <h1 className="fs-1 fw-bold text-light text-start">
              کارتن اسباب کشی مقاوم میخوای؟
            </h1>
            <br />
            <p className="text-light text-start fs-4 fw-normal">
              اَلوکارتن در خدمت شماست
            </p>
            <p className="text-light text-start fs-4 fw-normal">
              فروشگاه اینترنتی خرید کارتن اسباب کشی و لوازم بسته بندی در تهران
            </p>
            <br />
            <br />
            <p className="text-light text-center fs-1 fw-bold">تحویل ۲ ساعته!</p>
            <p className="text-light text-center fs-5 fw-bold">
              (در ساعات کاری) <br />تحویل سریع سفارشات در شهر تهران با پیک
              موتوری
              <br />
              پرداخت درب منزل
            </p>
            <br />
            <div className="d-grid gap-2 col-6 mx-auto">
              <a className="btn btn-primary btn-lg" href="tel:09394505055" role="button">09394505055</a>
              <a className="btn btn-primary btn-lg" href="tel:09194115050" role="button">09194115050</a>
            </div>
            <br /><br /><br /><br />
            <div className="d-xl-none d-lg-none d-md-block d-sm-block d-xs-block">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Notice --> */}
      <div className="row gx-0">
        <p className="fs-2 text-center fw-bold">
          ثبت سفارش از طریق تماس تلفنی و یا پیام در واتساپ صورت میگیرد
        </p>
        <p className="fs-2 text-center">
          پرداخت فاکتور در زمان تحویل در محل می‌باشد!
        </p>
      </div>
      {/* <!-- Products --> */}
      <div className="container">
        <div className="row gx-0">
          <div className="col-lg-4 col-sm-12">
            <div className="card border-3 m-1 pb-4">
              <img
                className="card-img-top object-fit-none"
                src="https://www.alocarton.com/wp-content/uploads/2021/06/alocarton-size1-410x408.webp"
                alt="Card image cap"
                title="Card image cap"
                width="300px"
                height="300px"
              />
              <div className="card-body">
                <h2 className="card-title text-center fw-bold">
                  کارتن اسباب کشی سایز ۱ (کوچک)
                </h2>
                <p className="card-text text-center">
                  طول ۴۵ _ عرض ۳۰ _ ارتفاع ۳۱<br />
                  کارتن نو و آکبند ۵ لایه مقاوم<br />
                  مناسب برای کتاب، ابزارآلات،<br />
                  وسایل خورده ریز و دکوری
                </p>
                <p className="card-text text-center text-success fs-4 fw-bold">
                  قیمت ۳۵ هزارتومان
                </p>
                {/* <! -- شروع آکاردئون --> */}
                <div
                  className="accordion position-absolute w-100 bottom-0 end-0"
                  id="accordionOne"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        توضیحات کارتن سایز کوچک
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionOne"
                    >
                      <div className="accordion-body text-start">
                        کارتن اسباب کشی سایز ۱ کوچک‌ترین سایز جعبه‌ی شرکت
                        الوکارتن می‌باشد و برای بسته بندی کردن کالا‌های کم حجم و
                        سنگین مانند: کتاب، ابزار آلات، اشیا دکوری در اثاث کشی
                        کاربرد دارد.<br />
                        حمل و نقل این سایز کارتن، برای تمام افراد از جمله
                        خانم‌ها به راحتی امکان پذیر است و همچنین مناسب نگهداری
                        لوازم برای مدت طولانی در انباری می‌باشد.
                      </div>
                    </div>
                  </div>
                </div>

                {/* <! -- پایان آکاردئون --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="card border-3 m-1 pb-4">
              <img
                className="card-img-top object-fit-none"
                src="https://www.alocarton.com/wp-content/uploads/2021/06/alocarton-size3-1.webp"
                alt="Card image cap"
                title="Card image cap"
                width="300px"
                height="300px"
              />
              <div className="card-body">
                <h2 className="card-title text-center fw-bold">
                  کارتن اسباب کشی سایز ۱ (کوچک)
                </h2>
                <p className="card-text text-center">
                  طول ۴۵ _ عرض ۳۰ _ ارتفاع ۳۱<br />
                  کارتن نو و آکبند ۵ لایه مقاوم<br />
                  مناسب برای کتاب، ابزارآلات،<br />
                  وسایل خورده ریز و دکوری
                </p>
                <p className="card-text text-center text-success fs-4 fw-bold">
                  قیمت ۳۵ هزارتومان
                </p>
                {/* <! -- شروع آکاردئون --> */}
                <div
                  className="accordion position-absolute w-100 bottom-0 end-0"
                  id="accordionTwo"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        توضیحات کارتن سایز متوسط
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionTwo"
                    >
                      <div className="accordion-body text-start">
                        کارتن اسباب کشی سایز ۱ کوچک‌ترین سایز جعبه‌ی شرکت
                        الوکارتن می‌باشد و برای بسته بندی کردن کالا‌های کم حجم و
                        سنگین مانند: کتاب، ابزار آلات، اشیا دکوری در اثاث کشی
                        کاربرد دارد.<br />
                        حمل و نقل این سایز کارتن، برای تمام افراد از جمله
                        خانم‌ها به راحتی امکان پذیر است و همچنین مناسب نگهداری
                        لوازم برای مدت طولانی در انباری می‌باشد.
                      </div>
                    </div>
                  </div>
                </div>

                {/* <! -- پایان آکاردئون --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="card border-3 m-1 pb-4">
              <img
                className="card-img-top object-fit-none"
                src="https://www.alocarton.com/wp-content/uploads/2021/06/alocarton-size4-410x380.webp"
                alt="Card image cap"
                title="Card image cap"
                width="300px"
                height="300px"
              />
              <div className="card-body">
                <h2 className="card-title text-center fw-bold">
                  کارتن اسباب کشی سایز ۱ (کوچک)
                </h2>
                <p className="card-text text-center">
                  طول ۴۵ _ عرض ۳۰ _ ارتفاع ۳۱<br />
                  کارتن نو و آکبند ۵ لایه مقاوم<br />
                  مناسب برای کتاب، ابزارآلات،<br />
                  وسایل خورده ریز و دکوری
                </p>
                <p className="card-text text-center text-success fs-4 fw-bold">
                  قیمت ۳۵ هزارتومان
                </p>
                {/* <! -- شروع آکاردئون --> */}
                <div
                  className="accordion position-absolute w-100 bottom-0 end-0"
                  id="accordionThree"
                >
                  <div className="accordion-item bottom-0">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        توضیحات کارتن سایز بزرگ
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionThree"
                    >
                      <div className="accordion-body text-start">
                        کارتن اسباب کشی سایز ۱ کوچک‌ترین سایز جعبه‌ی شرکت
                        الوکارتن می‌باشد و برای بسته بندی کردن کالا‌های کم حجم و
                        سنگین مانند: کتاب، ابزار آلات، اشیا دکوری در اثاث کشی
                        کاربرد دارد.<br />
                        حمل و نقل این سایز کارتن، برای تمام افراد از جمله
                        خانم‌ها به راحتی امکان پذیر است و همچنین مناسب نگهداری
                        لوازم برای مدت طولانی در انباری می‌باشد.
                      </div>
                    </div>
                  </div>
                </div>

                {/* <! -- پایان آکاردئون --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer className="mt-5 pt-5 bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2>درباره الوکارتن</h2>
            <p>
              برند اَلوکارتن با بیش از نیم قرن تجربه در زمینه‌ی فروش کارتن اسباب
              کشی و کلیه لوازم اسباب کشی فقط با یک تماس سفارشات مشتریان خود را
              در بازه‌ی زمانی کمتر از ۲ ساعت درب منزل تحویل می‌دهد. کارتن‌ها ۵
              لایه و بسیار مقاوم بوده و پرداخت وجه نیز بعد از تحویل سفارش درب
              منزل صورت می‌گیرد.
            </p>
          </div>

          <div className="col-2">
            <h2>صفحات ما</h2>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">صفحه اصلی</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">درباره ما</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">آموزش‌ها</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light">لوکیشن</a>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h2>شبکه‌های اجتماعی ما</h2>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a
                  href="https://www.linkedin.com/in/alocarton"
                  className="nav-link p-0 text-light"
                  >لینکدین</a
                >
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.instagram.com/alocarton/"
                  className="nav-link p-0 text-light"
                  >اینستاگرام</a
                >
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://wa.me/+989194115050"
                  className="nav-link p-0 text-light"
                  >واتساپ</a
                >
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://twitter.com/alocarton"
                  className="nav-link p-0 text-light"
                  >توییتر</a
                >
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.facebook.com/alocarton"
                  className="nav-link p-0 text-light"
                  >فیسبوک</a
                >
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://www.pinterest.com/alocarton/_created/"
                  className="nav-link p-0 text-light"
                  >پینترست</a
                >
              </li>
              <li className="nav-item mb-2">
                <a
                  href="https://hearthis.at/alocarton/"
                  className="nav-link p-0 text-light"
                  >هیردیس</a
                >
              </li>
            </ul>
          </div>

          <div className="col-4">
            <h2>مطالب پربازدید</h2>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light"
                  >راهنمای خرید کارتن اسباب کشی</a
                >
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light"
                  >برای یک اسباب کشی معمولی چه کارتنی بخرم؟</a
                >
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light"
                  >اسباب کشی بی دردسر چجوریه؟</a
                >
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light"
                  >تفاوت کارتن اسباب کشی 5 لایه با بقیه چیه؟</a
                >
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-light"
                  >چجوری از خسارت در اسباب کشی جلوگیری کنیم؟</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-between pt-2 mt-4 border-top">
          <p>
            کلیه حقوق این وب سایت متعلق است به برند رسمی و ثبت شده ی الوکارتن
          </p>
          <p>
            <a
              className="text-light link-underline-dark"
              href="https://www.pardisansystem.com/website-design"
              target="_blank"
              title="طراحی وب سایت"
              >طراحی سایت</a
            >
            و
            <a
              className="text-light link-underline-dark"
              href="https://www.pardisansystem.com/website-seo"
              target="_blank"
              title="سئو وب سایت"
              >سئو سایت</a
            >
            توسط شرکت
            <a
              className="text-light link-underline-dark"
              href="https://www.pardisansystem.com"
              target="_blank"
              title="شرکت پردیسان سیستم"
              >پردیسان سیستم</a
            >
          </p>
        </div>
      </div>
    </footer>
    {/* <!-- Bootstrap JavaScript Libraries --> */}
    <script src="/js/jquery-3.7.1.min.js"></script>

    <script src="/js/bootstrap.min.js"></script>
    </div>
  );
}