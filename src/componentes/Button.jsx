import React from 'react'
import './Button.css'

function Button({ text = "Try it now", symbol = false, symbol1 = false }) {
    return (
        <button className='stylish '>
            {
                symbol ?
                    symbol1 ?
                        <span className='btn_svg'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <path d="M23.333 4.507l-1.361-.387c-1.027-.293-1.814-1.08-2.108-2.093l-.387-1.36C19.357.28 18.997 0 18.584 0s-.774.28-.894.667l-.387 1.36a3.03 3.03 0 0 1-2.108 2.093l-1.361.387c-.4.107-.667.48-.667.893s.28.773.667.88l1.361.387c1.027.293 1.814 1.08 2.108 2.093l.387 1.36c.107.387.467.653.894.653a.92.92 0 0 0 .894-.653l.387-1.36a3.03 3.03 0 0 1 2.108-2.093l1.361-.387c.4-.107.667-.48.667-.893s-.28-.773-.667-.88zm-3.829 10.907L7.484 8.36c-.76-.453-1.708.2-1.561 1.067l2.281 13.707a1.06 1.06 0 0 0 1.841.493l3.535-4.24c.12-.147.293-.253.48-.32l5.256-1.747c.854-.28.974-1.427.2-1.88l-.013-.027zM3.709 2.2c.427 1.307.787 1.667 2.108 2.107.574.187.574.987 0 1.173-1.307.44-1.668.8-2.108 2.107a.62.62 0 0 1-1.174 0C2.108 6.28 1.748 5.92.427 5.48.147 5.387 0 5.147 0 4.893s.147-.493.427-.587c1.307-.44 1.668-.8 2.108-2.107a.62.62 0 0 1 1.174 0z"></path>
                            </svg>
                        </span>
                        :
                        <span className='btn_svg'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                <path d="M22.922 8.634c-.079-.908-.248-1.655-.601-2.376-.091-.187-.196-.36-.301-.534-.431-.681-.98-1.201-1.712-1.722-.706-.507-1.621-1.041-2.771-1.722l-.065-.04-2.85-1.588c-.81-.387-1.529-.614-2.314-.654h-.614c-.784.04-1.503.267-2.314.654-.784.374-1.699.908-2.85 1.588l-.065.04-2.771 1.722c-.732.521-1.281 1.041-1.712 1.722l-.301.534c-.353.721-.523 1.468-.601 2.376C1 9.515 1 10.597 1 11.958v.08l.078 3.324c.078.908.248 1.655.601 2.376.091.187.196.36.301.534.431.681.98 1.201 1.712 1.722.706.507 1.621 1.041 2.771 1.722l.065.04 2.85 1.588c.81.387 1.529.614 2.314.654h.614c.784-.04 1.503-.267 2.314-.654.784-.374 1.699-.908 2.85-1.588l.065-.04 2.771-1.722c.732-.521 1.281-1.041 1.712-1.722l.301-.534c.353-.721.523-1.468.601-2.376C23 14.481 23 13.4 23 12.038v-.08l-.078-3.324zm-5.634 4.538c-2.588.881-3.294 1.602-4.157 4.245a1.21 1.21 0 0 1-2.314 0c-.863-2.643-1.569-3.364-4.157-4.245a1.22 1.22 0 0 1-.85-1.175 1.22 1.22 0 0 1 .85-1.175c2.588-.881 3.294-1.602 4.157-4.245a1.21 1.21 0 0 1 2.314 0c.863 2.643 1.569 3.364 4.157 4.245 1.124.387 1.124 1.976 0 2.363v-.013z"></path>
                            </svg>
                        </span>
                    :
                    <span className='btn_svg'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <path d="M17.347 2.068a1 1 0 0 1 .623 1.062l-.848 6.368h3.833l.638.017c.186.017.523.062.825.295a1.5 1.5 0 0 1 .582 1.132c.014.382-.146.683-.24.844a7.47 7.47 0 0 1-.357.53l-.02.028-6.588 9.235a1 1 0 0 1-1.803-.713l.848-6.368h-3.833c-.221 0-.449 0-.638-.017s-.523-.062-.825-.295a1.5 1.5 0 0 1-.582-1.132c-.014-.382.146-.683.24-.844s.229-.35.357-.53l.02-.028 6.588-9.235a1 1 0 0 1 1.18-.349zM8.99 16.498a1 1 0 1 1 0 2H3.497a1 1 0 1 1 0-2H8.99zm-2.497-5.5a1 1 0 1 1 0 2H1.999a1 1 0 1 1 0-2h4.494zm2.497-5.5a1 1 0 1 1 0 2H3.996a1 1 0 1 1 0-2H8.99z"></path>
                        </svg>
                    </span>
            }
            {text}
        </button>
    )
}

export default Button