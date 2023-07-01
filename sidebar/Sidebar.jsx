import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@mui/icons-material';
import classes from './Sidebar.module.css';
import { RiHeartPulseFill, RiHospitalFill } from 'react-icons/ri';
import { GiDoctorFace, GiNetworkBars } from 'react-icons/gi';
import { BsFillFileEarmarkExcelFill, BsPatchCheckFill, BsTable } from 'react-icons/bs';
import { SiJson } from 'react-icons/si';
import { RxTransparencyGrid } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes["sidbar-wrapper"]}>

                <h3 className={classes['title']}>Dashboard</h3>
                <ul className={classes["sidebar-list"]}>
                    <li>
                        <NavLink to=''  className={({isActive}) => isActive ? `${classes['sidebar-list-item']} ${classes.active}`: classes['sidebar-list-item']}>
                            <LineStyle className={classes.icon} />
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='l1'  className={({isActive}) => isActive ? `${classes['sidebar-list-item']} ${classes.active}`: classes['sidebar-list-item']}>
                            <Timeline className={classes.icon} />
                            <span>Analytics</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='l2'  className={({isActive}) => isActive ? `${classes['sidebar-list-item']} ${classes.active}`: classes['sidebar-list-item']}>
                            <BarChart className={classes.icon} />
                            <span>Reports</span>
                        </NavLink>
                    </li>
                </ul>

                <h3 className={classes['title']}>Payer</h3>
                <ul className={classes["sidebar-list"]}>
                    <li>
                        <NavLink to='payer-upload'  className={({isActive}) => isActive ? `${classes['sidebar-list-item']} ${classes.active}`: classes['sidebar-list-item']}>
                            <RiHeartPulseFill className={classes.icon} />
                            <span>Upload Payer</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='payer-toc-upload'  className={({isActive}) => isActive ? `${classes['sidebar-list-item']} ${classes.active}`: classes['sidebar-list-item']}>
                            <BsTable className={classes.icon} />
                            <span>Table of Content</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='payer-innetwork-upload'  className={({isActive}) => isActive ? `${classes['sidebar-list-item']} ${classes.active}`: classes['sidebar-list-item']}>
                            <GiNetworkBars className={classes.icon} />
                            <span>In Network Files</span>
                        </NavLink>
                    </li>
                </ul>

                <h3 className={classes['title']}>Provider</h3>
                <ul className={classes["sidebar-list"]}>
                    <li>
                        <NavLink to='provider-upload'  className={({isActive}) => isActive ? `${classes['sidebar-list-item']} ${classes.active}`: classes['sidebar-list-item']}>
                            <RiHospitalFill className={classes.icon} />
                            <span>Providers Data Upload</span>
                        </NavLink>
                    </li>
                </ul>

                <h3 className={classes['title']}>Procedure</h3>
                <ul className={classes["sidebar-list"]}>
                    <li>
                        <NavLink to='l3'  className={({isActive}) => isActive ? `${classes['sidebar-list-item']} ${classes.active}`: classes['sidebar-list-item']}>
                            <GiDoctorFace className={classes.icon} />
                            <span>Upload Procedure</span>
                        </NavLink>
                    </li>
                </ul>

                <h3 className={classes['title']}>Transparency</h3>
                <ul className={classes["sidebar-list"]}>
                    <li>
                        <NavLink to='transparency-upload'  className={({isActive}) => isActive ? `${classes['sidebar-list-item']} ${classes.active}`: classes['sidebar-list-item']}>
                            <RxTransparencyGrid className={classes.icon} />
                            <span>Transparency Data Upload</span>
                        </NavLink>
                    </li>
                </ul>

                <h3 className={classes['title']}>File Status</h3>
                <ul className={classes["sidebar-list"]}>
                    <li>
                        <NavLink to='json-upload-status'  className={({isActive}) => isActive ? `${classes['sidebar-list-item']} ${classes.active}`: classes['sidebar-list-item']}>
                            <SiJson className={classes.icon} />
                            <span>JSON Upload Status</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='excel-upload-status'  className={({isActive}) => isActive ? `${classes['sidebar-list-item']} ${classes.active}`: classes['sidebar-list-item']}>
                            <BsFillFileEarmarkExcelFill className={classes.icon} />
                            <span>EXCEL Upload Status</span>
                        </NavLink>
                    </li>
                </ul>
                
                <h3 className={classes['title']}>Quick Menu</h3>
                <ul className={classes["sidebar-list"]}>
                    <li>
                        <NavLink to='l4'  className={({isActive}) => isActive ? `${classes['sidebar-list-item']} ${classes.active}`: classes['sidebar-list-item']}>
                            <Storefront className={classes.icon} />
                            <span>Products</span>
                        </NavLink>                    
                    </li>
                    <li>
                        <NavLink to='l5'  className={({isActive}) => isActive ? `${classes['sidebar-list-item']} ${classes.active}`: classes['sidebar-list-item']}>
                            <Timeline className={classes.icon} />
                            <span>Analytics</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='l6'  className={({isActive}) => isActive ? `${classes['sidebar-list-item']} ${classes.active}`: classes['sidebar-list-item']}>
                            <TrendingUp className={classes.icon} />
                            <span>Sales</span>
                        </NavLink>                    
                    </li>
                </ul>
                
            </div>
        </div>
    );
}

export default Sidebar;
