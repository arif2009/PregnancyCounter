export default () => {

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    const minDate = `${dd}-${mm}-${yyyy - 1}`;
    const currentDate = `${dd}-${mm}-${yyyy}`;

    const dateDiffDay = (date1, date2) => {
        const MS_PER_DAY = 1000 * 60 * 60 * 24;
        return Math.round(dateDifference(date1, date2) / MS_PER_DAY);
    };

    const dateDiffWeek = (date1, date2) =>{
        const diff = dateDiffDay(date1, date2) / 7;
        const weeks = Math.floor(diff);
        const days = Math.round((diff - weeks) * 7);

        return `${weeks} weeks ${days} days`;
    };

    const dateDiffMonth = (date1, date2) => {
        const diff = dateDiffDay(date1, date2) / 30;
        const months = Math.floor(diff);
        const m_weeks = ((diff - months) * 30) / 7;
        const weeks = Math.floor(m_weeks);
        const days = Math.round((m_weeks - weeks) * 7);

        return `${months} months ${weeks} weeks ${days} days`;
    };
    
    const dateDifference = (date1, date2) => {
        const d1 = date1.split('-'); const d2 = date2.split('-');
        const dt1 = new Date(d1[2], d1[1], d1[0]); const dt2 = new Date(d2[2], d2[1], d2[0]);
        //console.log(dt1,dt1 instanceof Date, dt2, dt2 instanceof Date);
        const utc1 = Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate());
        const utc2 = Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate());
        
        return utc2 - utc1;
    };

    return [minDate, currentDate, dateDiffDay, dateDiffWeek, dateDiffMonth];
};