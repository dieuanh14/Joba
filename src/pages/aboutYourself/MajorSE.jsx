import React from "react";
import NavBar from "../../components/NavBar";
import "../../scss/majorMobile.scss";
import SE from "../../assets/img/florid-remote-workflow-1.png";
function MajorSE() {
  return (
    <div className="about__yourself major__BA">
      <NavBar />
      <h1>Software Engeenering</h1>
      <div
        className="main__content"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "67rem",
          alignItems: "center",
        }}
      >
        <div>
          <img src={SE} alt="" className="mobile__dev" />
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-2rem",
            }}
            className="major__name"
          >
            Software Developer
          </span>
        </div>
        <div className="ba__definition">
          <span className="first__txt"> Software Developer:</span>
          <span>
            <span></span> còn được gọi là Kỹ sư phần mềm. Đây là những người sử
            dụng ngôn ngữ lập trình để thiết kế và xây dựng chương trình máy
            tính. Những ứng dụng thường ngày mà bạn sử dụng trên các thiết bị
            công nghệ, điện tử đều được tạo ra bởi Software Developer.
          </span>
          <span className="first__txt">Để trở thành:</span>
          <span>
            <span></span>Kiến thức về công nghệ, lập trình. Tư duy toán học,
            logic. Ngôn ngữ lập trình. Trau dồi ngoại ngữ . Phát triển kỹ năng
            mềm. Khả năng tự học và thích ứng nhanh. Khả năng sắp xếp, quản lý.
          </span>
          <span className="first__txt">Công việc: </span>
          <span>
            <span></span>các ứng dụng hiện đại ngày
            càng phổ biến đã giúp cuộc sống của con người trở nên thuận lợi hơn.
            Chính vì vậy, dự đoán trong những năm tới, nhu cầu tuyển dụng các
            Software Developer vẫn sẽ rất lớn và trở thành một trong những công
            việc cần nguồn lực dồi dào.
          </span>
          <span className="first__txt">Thu nhập :</span>
          <span>
            <span></span> Đối với người đã tích luỹ được nhiều kỹ năng, kinh
            nghiệm dày dặn trên 3 năm mức lương được trả từ khoảng 20.000.000 –
            25.000.000 VNĐ
          </span>
        </div>
      </div>
    </div>
  );
}

export default MajorSE;
