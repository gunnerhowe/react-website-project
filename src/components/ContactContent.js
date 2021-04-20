import React from 'react';
import './ContactContent.css'

function ContactContent(props) {
  return (
    <>
      <div className='contact__content'>
        <div className='contact__content__info'>
        <h1 className='contact__content__h1'>{props.h1}</h1>
        <p className='contact__content__p'>{props.text}</p>
        <br></br>
        <h1 className='contact__content__h1'>{props.h1_1}</h1>
        <hr></hr>
        <h2 className='contact__content__h2'>{props.h2}</h2>
        <h3 className='contact__content__h3'>{props.h3}</h3>
        <hr></hr>
        <br></br>
        <p className='contact__content__p'>{props.text_1}</p>
        <br></br>
        <ul>
        <li> <p className='contact__content__p'>{props.text_2}</p></li>
        <br></br>
        <li> <p className='contact__content__p'>{props.text_3}</p></li>
        <br></br>
        <li> <p className='contact__content__p'>{props.text_4}</p></li>
        <br></br>
        <li> <p className='contact__content__p'>{props.text_5}</p></li>
        <br></br>
        <li> <p className='contact__content__p'>{props.text_6}</p></li>
        </ul>
        <br></br>
        <br></br>
        <hr></hr>
        <h2 className='contact__content__h2'>{props.h2_1}</h2>
        <h3 className='contact__content__h3'>{props.h3_1}</h3>
        <hr></hr>
        <br></br>
        <p className='contact__content__p'>{props.text_7}</p>
        <br></br>
        <ul>
        <li> <p className='contact__content__p'>{props.text_8}</p></li>
        <br></br>
        <li> <p className='contact__content__p'>{props.text_9}</p></li>
        <br></br>
        </ul>
        <br></br>
        <br></br>
        <h1 className='contact__content__h1'>{props.h1_2}</h1>
        <h2 className='contact__content__h2'>{props.h2_2}</h2>
        <hr></hr>
        <h3 className='contact__content__h3'>{props.h3_2}</h3>
        <p className='contact__content__p'>{props.text_10}</p>
        <br></br>
        <h2 className='contact__content__h2'>{props.h2_3}</h2>
        <hr></hr>
        <h3 className='contact__content__h3'>{props.h3_3}</h3>
        <p className='contact__content__p'>{props.text_11}</p>
        <br></br>
        <h2 className='contact__content__h2'>{props.h2_4}</h2>
        <hr></hr>
        <h3 className='contact__content__h3'>{props.h3_4}</h3>
        <p className='contact__content__p'>{props.text_12}</p>
        <br></br>
        <h2 className='contact__content__h2'>{props.h2_5}</h2>
        <hr></hr>
        <h3 className='contact__content__h3'>{props.h3_5}</h3>
        <p className='contact__content__p'>{props.text_13}</p>
        <br></br>
        <br></br>
        <h1 className='contact__content__h1'>{props.h1_3}</h1>
        <br></br>
        <div id="myProgress">
            <div id="myBar1">5/10</div>
        </div>
        <br></br>
        <p className='contact__content__p'>{props.text_14}</p>
        <br></br>
        <br></br>
        <br></br>
        <div id="myProgress">
            <div id="myBar2">5/10</div>
        </div>
        <br></br>
        <p className='contact__content__p'>{props.text_15}</p>
        <br></br>
        <br></br>
        <br></br>
        <div id="myProgress">
            <div id="myBar3">5/10</div>
        </div>
        <br></br>
        <p className='contact__content__p'>{props.text_16}</p>
        <br></br>
        <br></br>
        <br></br>
        <div id="myProgress">
            <div id="myBar4">8/10</div>
        </div>
        <br></br>
        <p className='contact__content__p'>{props.text_17}</p>
        <br></br>
        <br></br>
        <br></br>
        <div id="myProgress">
            <div id="myBar5">8/10</div>
        </div>
        <br></br>
        <p className='contact__content__p'>{props.text_18}</p>
        <br></br>
        <br></br>
        <br></br>
        </div>
      </div>
    </>
  );
}

export default ContactContent;