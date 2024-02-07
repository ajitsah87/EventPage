
import style from "./style/detail-agenda.module.css"
import Image from 'next/image';

function Speaker({ item }) {
    return <div className={style.speakerContainer}>
        <Image src={`${item?.image}`} width={50} height={50} className={style.speaker} alt="" />
        <div dangerouslySetInnerHTML={{ __html: item.text }} className="editor" />
    </div>
}

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

export default function DetailAgenda({ data = [] }) {
    return <div className={style.detailAgendaContainer}>
        <h1>Agenda</h1>
        <div className={style.agendaFlex}>
            {data?.map((item, idx) => {
                return (
                    <div key={idx}>
                        <div className={style.agendaGrid}>
                            <div className={style.left}>
                                {formatTime(item.startTime)} to  {formatTime(item.endTime)}
                            </div>
                            <div className={style.right}>
                                <div dangerouslySetInnerHTML={{ __html: item.heading }} className="editor" />
                                <div className={style.speakerGrid}>
                                    {
                                        item?.speakers?.map((speaker, idx) => {
                                            return (<Speaker key={idx} item={speaker} />)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>
    </div>
}