export default function Clock() {
    
    requestAnimationFrame(time);

    function time() {
        // ищем все елементы с атрибутом data-digit
        const obj = document.querySelectorAll(".binary-clock>[data-digit]");
        // получаем объект время
        const date = new Date();

        // Получаем массив с времинем
        const digits = [
            date.getHours().toString().padStart(2, "0"),
            date.getMinutes().toString().padStart(2, "0"),
            date.getSeconds().toString().padStart(2, "0")
        ].join('').split('')

        // проходимся по массиву
        obj.forEach((el, index) => {
            // тутс по присваеваем обекту digit число
                el.dataset.digit = digits[index] || ''; 
        });
        // хрен знает чё за хрень но чёт она с обновлением делает 
        requestAnimationFrame(time);
    }

    return (
        <div className="Clock">
            <div className="binary-clock">
                <span>Часы</span><span>Минуты</span><span>Секунды</span>
                
                <div data-digit>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    </div>
                <div data-digit>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    </div>
                
                <div data-digit>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    </div>
                <div data-digit>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    </div>

                <div data-digit>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    </div>
                <div data-digit>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    </div>
            </div>
        </div>
    );
}