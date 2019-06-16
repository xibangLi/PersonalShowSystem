$(document).ready(function () {
    //初始化首页banaer
    init_swiper();

    //当前页数, 每页显示行数, 所有记录数
    init_set_page(1,10,335);
    
});

//初始化首页banaer
function init_swiper() {
    //初始化Swiper
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // vertical/horizontal 垂直/水平切换选项
        autoplay: true,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}

//当前页数, 每页显示行数, 所有记录数
function init_set_page(currentPage, pageSize, totalSize) {
    //总页数
    var totalPage = 0;
    //总共分几页
    if (totalSize / pageSize > parseInt(totalSize / pageSize)) {
        totalPage = parseInt(totalSize / pageSize) + 1;
    } else {
        totalPage = parseInt(totalSize / pageSize);
    }
    
    var startRow = (currentPage - 1) * pageSize + 1;//开始显示的行  1
    var endRow = currentPage * pageSize;//结束显示的行   15
    endRow = (endRow > totalSize) ? totalSize : endRow;

    //构造分页HTML
    var tempStr = "";
    //上一页(可否点击)
    if (currentPage > 1) {
        tempStr += "<a href=\"javascript:void(0)\" onClick=\"init_set_page(" + (currentPage - 1) + "," + pageSize + "," + totalSize + ")\">上一页</a>"
    } else {
        tempStr += "上一页";
    }
    //中间页(如果页数过多，添加省略号...)
    if (totalPage < 10) {
        for (var j = 1; j <= totalPage; j++) {
            //当前页
            if (currentPage == j) {
                tempStr += "<a href=\"javascript:void(0)\" class=\"cur\" onClick=\"init_set_page(" + j + "," + pageSize + "," + totalSize + ")\">" + j + "</a>"
            } else {
                tempStr += "<a href=\"javascript:void(0)\" onClick=\"init_set_page(" + j + "," + pageSize + "," + totalSize + ")\">" + j + "</a>"
            }
        }
    } else {
        if (currentPage < 5 && currentPage > 0) {//当前页较小时
            for (var j = 1; j <= currentPage + 3; j++) {
                //当前页
                if (currentPage == j) {
                    tempStr += "<a href=\"javascript:void(0)\" class=\"cur\" onClick=\"init_set_page(" + j + "," + pageSize + "," + totalSize + ")\">" + j + "</a>"
                } else {
                    tempStr += "<a href=\"javascript:void(0)\" onClick=\"init_set_page(" + j + "," + pageSize + "," + totalSize + ")\">" + j + "</a>"
                }
            }
            tempStr += "···";
        } else if (currentPage > totalPage - 3) {//当前页较大时
            tempStr += "···";
            for (var j = currentPage - 3; j <= totalPage; j++) {
                //当前页
                if (currentPage == j) {
                    tempStr += "<a href=\"javascript:void(0)\" class=\"cur\" onClick=\"init_set_page(" + j + "," + pageSize + "," + totalSize + ")\">" + j + "</a>"
                } else {
                    tempStr += "<a href=\"javascript:void(0)\" onClick=\"init_set_page(" + j + "," + pageSize + "," + totalSize + ")\">" + j + "</a>"
                }
            }
        } else {//当前页在中间时
            tempStr += "···";
            for (var j = currentPage - 3; j <= currentPage + 3; j++) {
                //当前页
                if (currentPage == j) {
                    tempStr += "<a href=\"javascript:void(0)\" class=\"cur\" onClick=\"init_set_page(" + j + "," + pageSize + "," + totalSize + ")\">" + j + "</a>"
                } else {
                    tempStr += "<a href=\"javascript:void(0)\" onClick=\"init_set_page(" + j + "," + pageSize + "," + totalSize + ")\">" + j + "</a>"
                }
            }
            tempStr += "···";
        }
        
    }
    //下一页(可否点击)
    if (currentPage < totalPage) {
        tempStr += "<a href=\"javascript:void(0)\" onClick=\"init_set_page(" + (currentPage + 1) + "," + pageSize + "," + totalSize + ")\">下一页</a>";
    } else {
        tempStr += "下一页";
    }

    tempStr += "&nbsp;&nbsp;&nbsp;&nbsp;共" + totalPage + "页";
    //渲染到页面上
    document.getElementById("pagination").innerHTML = tempStr;
}