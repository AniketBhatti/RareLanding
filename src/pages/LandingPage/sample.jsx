import React from 'react'

const sample = () => {
    return (
        <div ref={regalFinance} className="regalFinance w-screen h-[200vh]">
            <div className='regal-main'>

                <div className="regal-header">
                    <div className="headings">
                        <h2>Regal Finance</h2>
                        <p>Empowering Your Finances with Clarity and Control</p>
                        <hr />
                        <div className="regal-work">
                            <span>UI/UX Design</span>
                            <span>Website Design</span>
                            <span>Frontend Development</span>
                        </div>
                    </div>

                    <div className="regal-mobileApp">
                        <img src={intuitiveDes} alt="" />
                    </div>
                </div>


                <div className="regal-body">
                    <div className="regal-navbar">
                        <div className='rgl-nav'>
                            <img src={rgl_nav} alt="" />
                        </div>

                        <div className='rgl-explr'>
                            <img src={rgl_explore} alt="" />
                        </div>

                    </div>

                    <div className="regal-WSContent">
                        <div className="rgl-frdm">
                            <img src={rgl_freedom} alt="" />
                            <img id='fin-cir' src={rgl_financeCirc} alt="" />
                        </div>

                        <div className="rgl-ast">
                            <img src={rgl_assets} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default sample
