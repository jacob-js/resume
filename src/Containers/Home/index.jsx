import { Avatar } from 'antd';
import './style.scss';
import img from '../imgs/portrait.jpg';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

export function HomePage(){

    return(
        <div className="home-page">
           <div className="content">
               <div className="div-avatar">
                   <Avatar style={{ border: '2px solid white' }} src={img} size={300} />
               </div>
               <div className="div-intro">
                   <div className="intro-name">I'm Jacob</div>
                   <div className="intro-poste">Full stack developer</div>
                   <div className="div-socials">
                       <div> <a href="https://www.linkedin.com/in/merci-jacob-1b9776190/" target="_blank" rel="noopener noreferrer"> <LinkedinOutlined /> </a> </div>
                       <div> <a href="https://github.com/jacob1design" target="_blank" rel="noopener noreferrer"><GithubOutlined /></a> </div>
                   </div>
               </div>
           </div>
        </div>
    )
}