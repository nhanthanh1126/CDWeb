import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './About.scss';

class About extends Component {

    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Về Website Đặt lịch khám bệnh
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>

                    </div>

                    <div className='content-right'>
                        <p>
                            Đồ án này nhằm xây dựng một website cho phép người dùng đặt lịch khám bệnh với các bác sĩ.
                            <br />
                            Website sẽ cung cấp danh sách các bác sĩ và thông tin chi tiết về chuyên môn của họ.
                            <br />
                            Người dùng có thể chọn bác sĩ, xem lịch trình khám bệnh của bác sĩ và đặt lịch khám theo thời gian phù hợp.
                        </p>
                    </div>
                </div>
            </div>

        );
    }

}

//map state của redux và tiêm vào react
//react lấy biến state thông qua biến state
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    //gọi đến event của redux
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
//connect: giữa react và redux