"use client"
import Top from '@/public/assets/top.png';
import Bottom from '@/public/assets/bottom.png';
import Line from '@/public/assets/line.png';
import Circle from '@/public/assets/circle.png';
import AgendaCircle from '@/public/assets/btn_circle.png';
import AgendaBookMark from '@/public/assets/bookmark.png';
import style from './style/event-schedule.module.css';
import Image from 'next/image';
import { Dialog, DialogContent, IconButton, Slide } from "@mui/material";
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AgendaDetail from './DetailAgenda';
import React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
function EventSchedule({ items = [] }) {
    const [showSnackBar, setShowSnackBar] = useState(false);

    const TopItem = ({ title, startTime, endtime }) => <div className={style.itemTop}>
        <Image src={Line} className={style.line} alt='line'/>
        <Image src={Circle} className={style.circle} alt='circle' />
        <Image src={Top} className={style.top} alt='top'/>
        <p className={style.itemTopTitle}> {title} </p>
        <p className={style.itemTopTime}>{startTime} to {endtime}</p>
    </div>

    const BottomItem = ({ title, startTime, endtime }) => <div className={style.itemBottom}>
        <Image src={Line} className={style.line} alt='line' />
        <Image src={Circle} className={style.circle} alt='circle'/>
        <Image src={Bottom} className={style.bottom} alt='bottom'/>
        <div className={style.itemBottomTitle} dangerouslySetInnerHTML={{ __html: title }} />
        <p className={style.itemBottomTime}>{startTime} to {endtime}</p>
    </div>

    function formatTime(timestamp) {
        let date = new Date(timestamp);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let time = hours + ':' + minutes + ' ' + ampm;
        return time;
    }

    const handleAgenda = () => {
        setShowSnackBar(true);
    }

    return (
        <div className={style.container}>
            <div className={style.agendaContainer}>
                <h1>Event Schedule</h1>
                <div className={style.wrapper}>
                    <div className={style.innerWrapper}>
                        {
                            items?.map((item, idx) => {
                                const startTime = formatTime(item.startTime);
                                const endTime = formatTime(item.endTime);
                                const div = document.createElement('div');
                                div.innerHTML = item.heading;
                                const num = 40;
                                const originalString = String(div.querySelector("p")?.textContent || "");
                                let truncatedString = originalString.substring(0, num);
                                if (truncatedString.charAt(num - 1) && truncatedString.charAt(num - 1) !== ' ' && originalString.charAt(num) !== ' ') {
                                    let lastSpaceIndex = truncatedString.lastIndexOf(' ');
                                    truncatedString = truncatedString.substring(0, lastSpaceIndex);
                                }
                                return idx % 2 === 0 ? <TopItem title={truncatedString} startTime={startTime} endtime={endTime} /> : <BottomItem title={truncatedString} startTime={startTime} endtime={endTime} />
                            })
                        }
                    </div>
                </div>
                <div className={style.agendaBtn} onClick={handleAgenda}>
                    <div className={style.agendaBtnWrapper}>
                        <Image src={AgendaCircle} alt='AgendaCircle' />
                        <Image src={AgendaBookMark} alt='AgendaBookMark'/>
                    </div>
                </div>
            </div>
            <Dialog
                open={showSnackBar}
                onClose={() => setShowSnackBar(false)}
                fullScreen
                TransitionComponent={Transition}
            >
                <DialogContent>
                    <AgendaDetail data={items} />
                </DialogContent>

                <IconButton onClick={() => setShowSnackBar(false)} autoFocus sx={{ position: 'absolute', top: -8, right: -10, color: "white" }}>
                    <CloseIcon color="success" style={{ color: "black" }} />
                </IconButton>

            </Dialog>
        </div>
    )
}

export default EventSchedule;