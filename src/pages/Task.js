import React from "react";

const Task = () => {
  return (
    <>
      <div className="baocao container2">
        <div className="title">Những yêu cầu đã hoàn thành</div>
        <div className="list">
          <span>1. Dùng json-server làm db api server</span>
          <br />
          <span>2. Đổ dữ liệu từ json-server vào trang</span>
          <br />
          <span>3. Sử dụng router để nhúng các trang chức năng vào layout</span>
          <br />
          <span>
            4. Viết 1 route có tên baocao, để hiện 1 view trình bày những gì đã
            làm
          </span>
          <br />
          <span>
            5. Tạo thêm chức năng hiển thị sản phẩm theo loại và hiện khi nhắp
            tên loại
          </span>
          <br />
          <span>6. Hoàn thiện cho giỏ hàng (cập nhật/ xóa, tổng tiền)</span>
          <br />
          <span>7. Sử dụng redux để lưu dữ liệu giỏ hàng</span>
          <br />
          <span>
            8. Thực hiện xác thực với firebase/google hoặc chức năng hiện và lưu
            ý kiến trong trang chi tiết sản phẩm
          </span>
          <br />
          <span>
            9. Lấy các thông tin bổ sung từ API miễn phí về trình bày trong
            trang: hình ảnh đẹp, thời tiết, phim
          </span>
          <br />
        </div>
      </div>
    </>
  );
};

export default Task;
