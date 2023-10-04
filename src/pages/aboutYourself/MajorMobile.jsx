import React from "react";
import NavBar from "../../components/NavBar";
import "../../scss/majorMobile.scss";
import mobileDev from "../../assets/img/florid-woman-wearing-vr-glasses.png";
function MajorMobile() {
  return (
    <div className="about__yourself major__BA">
      <NavBar />
      <h1>Software Engeenering</h1>
      {/* <small>Finding Yourself</small> */}
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
          <img src={mobileDev} alt="" className="mobile__dev" />
          <span style={{ display: "flex", justifyContent: "center" }} className="major__name">
            Mobile Developer
          </span>
        </div>
        <div className="ba__definition">
          <span className="first__txt">Lập trình viên ứng dụng:</span>
          <span>
            <span></span> là những chuyên viên lập trình về công nghệ di động.
            Ngành này sử dụng ngôn ngữ lập trình (Java, C#,...) để viết, để sáng
            tạo.
          </span>
          <span className="first__txt">Để trở thành:</span>
          <span>
            <span></span> một lập trình viên giỏi, bạn cần nắm rõ các cấu trúc
            dữ liệu, kinh nghiệm về ngôn ngữ Java, Swift,.. để nghiên cứu, thiết
            kế và phát triển ứng dụng phục vụ cho nhu cầu của người dùng.
          </span>
          <span className="first__txt">Công việc: </span>
          <span>
            <span></span> lcủa lập trình viên ứng dụng là thiết kế, xây dựng các
            ứng dụng chạy trên thiết bị điện thoại thông minh thuộc hệ điều hành
            IOS hay Android.
          </span>
          <span className="first__txt">Thu nhập :</span>
          <span>
            <span></span> của một lập trình viên ứng dụng sẽ dao động từ 8-12
            triệu với người có kinh nghiệm dưới 2 năm. Đối với những lập trình
            viên giỏi, có nhiều kinh nghiệm thì mức thu nhập rất cao và không
            giới hạn về con số.
          </span>
        </div>
      </div>
    </div>
  );
}

export default MajorMobile;
