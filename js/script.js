/**
 * Created by apuc0 on 17.10.2017.
 */
var map = new ACMap();
map.customGeoCoder('г. Донецк, ул. Артема 71', [], function (coor) {
    map.init({
        mapId: 'yaMap2',
        height: '600px',
        zoom: 11,
        center: coor,
        controls: ['default', 'routeButtonControl'],
        placeMarks: [
            {
                coordinates: [47.995496, 37.80515],
                properties: {
                    hintContent: 'Всплывашка при наведении',
                    balloonContent: 'какой-то balloon',
                    balloonContentHeader: '<h2>Моя метка</h2>',
                    balloonContentBody: '<div style="width: 100px;margin-top: 10px">Текст метки</div>',
                    balloonContentFooter: '<div style="margin-top: 10px">Подвал</div>'
                },
                options: {
                    draggable: false
                },
                events: [
                    {
                        name: 'click',
                        handler: function (e) {
                            alert('Клик по метке');
                        }
                    }
                ]
            },
            {
                address: 'г. Донецк, ул. Уржумская 81',
                properties: {
                    hintContent: 'Всплывашка при наведении 2',
                    balloonContent: 'какой-то balloon',
                    balloonContentHeader: '<h2>Моя метка 2</h2>',
                    balloonContentBody: '<div style="width: 100px;margin-top: 10px">Текст метки 2</div>',
                    balloonContentFooter: '<div style="margin-top: 10px">Подвал 2</div>'
                },
                options: {
                    draggable: true,
                    iconShape: {
                        type: 'Rectangle',
                        // Прямоугольник описывается в виде двух точек - верхней левой и нижней правой.
                        coordinates: [
                            [-25, -25], [25, 25]
                        ]
                    }
                },
                iconLayout: '<div class="placeMarkLayoutContainer"><div class="iconLayout">23</div></div>'
            },
            {
                address: 'г. Донецк, ул. Артема 110',
                properties: {
                    hintContent: 'Всплывашка при наведении 3',
                    balloonContent: 'какой-то balloon',
                    balloonContentHeader: '<h2>Моя метка 3</h2>',
                    balloonContentBody: '<div style="width: 100px;margin-top: 10px">Текст метки 3</div>',
                    balloonContentFooter: '<div style="margin-top: 10px">Подвал 3</div>'
                },
                options: {
                    draggable: true,
                    iconShape: {
                        type: 'Circle',
                        // Круг описывается в виде центра и радиуса
                        coordinates: [0, 0],
                        radius: 25
                    }
                },
                iconLayout: '<div class="placeMarkLayoutContainer"><div class="iconLayoutСircle">24</div></div>'
            }
        ]
    });
    console.log(coor);
});
