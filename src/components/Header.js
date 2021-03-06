const Header = {
        render() {
            return /* html */ `
        <div class="w-full h-auto bg-[#1e1e27] py-3">
        <div class="max-w-screen-lg h-auto m-auto flex justify-between">
            <div class="menu-top text-sm">
                GIAO HÀNG MIỄN PHÍ TRÊN TOÀN QUỐC KHÍ MUA 5 SẢN PHẨM TRỞ LÊN !
            </div>
            <div class="menu-top text-sm">
                ${localStorage.getItem("user") ? `<ul class="flex">
                <a id="account-email"></a>
                <a herf="" id="logout" class="cursor-pointer">Logout</a>
                </ul>` : `<a href="/signin" class="mr-5 hover:text-red-500">Đăng nhập</a>
                <a href="/signup" class=" hover:text-red-500">Đăng ký</a>`}
            </div>
        </div>
    </div>
    <div class="w-full h-auto py-5">
        <div class="max-w-screen-lg h-auto m-auto flex justify-between">
            <div class="">
                <img src="../../img/logo.png" alt="">
            </div>
            <ul class="ul w-auto flex justify-between items-center">
                <li>
                    <a href="/">TRANG CHỦ</a>
                </li>
                <li>
                    <a href="/products">SẢN PHẨM</a>
                </li>
                <li>
                    <a href="/post">BÀI VIẾT</a>
                </li>
                <li>
                    <a href="/contact">LIÊN HỆ</a>
                </li>
                <div class="px-5">
                    <a href=""><i class="fa fa-search" aria-hidden="true"></i></a>
                </div>
                <div class="w-10 h-10 bg-[#eceff6] flex justify-center rounded-full items-center relative">
                    <a href="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
                    <div class="absolute bg-red-500 w-5 h-5 -top-2 right-0 rounded-full flex justify-center items-center">
                        <a href="" class="text-white text-sm">2</a>
                    </div>
                </div>
            </ul>
        </div>
    </div>
        `;
    },
    afterRender() {
        const logout = document.querySelector("#logout");
        logout.addEventListener("click", () => {
            localStorage.removeItem("user");
            document.location.href = "/";
        });
    },
};
export default Header;