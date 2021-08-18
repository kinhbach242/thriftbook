import React from 'react'

const Banner =() => {
    return (
    <div>
        <div className="home-banner">
            <div className="home-banner-left">
               <div className="box-banner box-left"> 
                   <img src="/images/banner/DT-L--552x352_giveaway_0bfdc414.jpg" alt="" />
                   <p>
                       <span className="title1">Tặng sản phẩm của Stephen King</span>
                       <br />
                    <span className="title2">Đặt hàng trước Billy Summers để có cơ hội giành chiến thắng!</span>
                  </p>
               </div>
            </div>
            <div className="home-banner-right">
                <div className="box-banner box-right"> 
                    <img src="/images/banner/DT-M-_544x144_4fd97253.jpg" alt="" />
                    <p>
                       <span className="title1">Bạn đã sẵn sàng để trở lại trường học?</span>
                       <br />
                    <span className="title2">Hãy tìm mọi thứ bạn cần chuẩn bị</span>
                  </p>
                </div>
                <div className="box-banner box-bottom"> 
                    <div className="box1">
                        <img src="/images/banner/DT-S-_264x144_2c9f9707.jpg" alt="" />
                        <p>
                        <span className="title1">Trò chơi điện tử</span>
                        <br />
                        <span className="title2">Xem chúng tôi đang chơi gì</span>
                    </p>
                    </div>
                    <div className="box2">
                        <img src="/images/banner/DT-S--264x144_e61d5143.jpg" alt="" />
                        <p>
                        <span className="title1">Kỳ nghỉ về tinh thần</span>
                        <br />
                        <span className="title2">Tìm sách trên khắp thế giới</span>
                    </p>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="home-marketing-bottom">
            <div className="home-marketing-bottom-box">
                <a href="">Give Away</a><br/>
                <span>Tham gia để kiếm sách miễn phí</span>
            </div>
            <div className="home-marketing-bottom-box">
                 <a href="">Ưu đãi sách tiết kiệm</a><br/>
                <span>Giảm 10% cho bất kỳ mặt hàng đủ điều kiện nào</span>
            </div>
            <div className="home-marketing-bottom-box">
                 <a href="">Ứng dụng di động</a><br/>
                <span>Mua sắm nhanh hơn và kiếm điểm thưởng</span>
            </div>
        </div>
    </div>
    )
}


export default Banner

