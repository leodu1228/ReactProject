import React from 'react';



// 模擬在畫面渲染後, 與後端response的資料還沒送回來時, 以state的false判定去暫時顯示loading, 等資料收回後改變state, 再做一次渲染
// 應用componentDidMount() : component第一次渲染DOM時會觸發
export default class Baby extends React.Component {
    constructor() {
        super()
        this.state = {
            isGetData: false,
            Mom: ''
        }
        this.ajaxSimulator = this.ajaxSimulator.bind(this);
    }

    ajaxSimulator() {
        setTimeout(() => { this.setState({ isGetData:true, Mom: 'Jenny' }) }, 3000);
    }

    componentDidMount() {
        this.ajaxSimulator();
    }

    render() {
        if (this.state.isGetData === false) {
            return (
                <div>Loading</div>
            )
        } else {
            return (
                <div>你娘親是{this.state.Mom}</div>
            )
        }
    }

}
