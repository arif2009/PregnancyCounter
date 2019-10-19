export default () => {

    //https://stackoverflow.com/a/563442/10852081
    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    };

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    //Start: min date
    var d = today;
    d.setMonth(d.getMonth() - 10);
    const minDd = String(d.getDate()).padStart(2, '0');
    const minMm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
    const minYyyy = d.getFullYear();
    //End: min date

    const minDate = `${minDd}-${minMm}-${minYyyy}`;
    const currentDate = `${dd}-${mm}-${yyyy}`;

    const deliveryAndBorn = (selectedDate, currentDate) => {
        const dateArr = selectedDate.split('-');
        const date = new Date(dateArr[2], dateArr[1]-1, dateArr[0]);

        const delvDate = date.addDays(40*7); //Imagin delivery time as 40

        const prepareDeliveryDate = `${String(delvDate.getDate()).padStart(2, '0')}-${String(delvDate.getMonth() + 1).padStart(2, '0')}-${delvDate.getFullYear()}`;

        const bornLeftDay = dateDiffDay(currentDate, prepareDeliveryDate);
        const bornLeftWeek = Math.floor(bornLeftDay/7);

        return {deliveryDate: delvDate.toDateString(), bornLeftDay, bornLeftWeek};
    };

    const dateDiffDay = (date1, date2) => {
        const MS_PER_DAY = 1000 * 60 * 60 * 24;
        const diff = dateDifference(date1, date2);
        return Math.round(diff / MS_PER_DAY);
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
        const dt1 = new Date(d1[2], d1[1]-1, d1[0]); const dt2 = new Date(d2[2], d2[1]-1, d2[0]);
        const utc1 = Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate());
        const utc2 = Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate());
        
        return utc2 - utc1;
    };

    return [minDate, currentDate, deliveryAndBorn, dateDiffDay, dateDiffWeek, dateDiffMonth];
};