document.addEventListener('DOMContentLoaded', () => {
    const screenWidth = document.documentElement.clientWidth
    const iconSize = screenWidth >= 1440 ? 50 : screenWidth >= 1200 ? 41 : screenWidth >= 768 ? 25 : 30

    const pointIconSize = [iconSize, iconSize]
    const pointIconOffset = [-iconSize / 2, -iconSize / 2]
    const iconPath = '/bitrix/templates/gar_new/images/pickupmap-icons/shop_new.svg'

    var center = [53.90356412, 27.50624531], //центр для общей карты. Если карта для конкретного салона, можно не передавать
        zoom = 11,
        markers = [
            {
                address: "Минск, пр-т Независимости, 44",
                coords: {lat: 53.911203, lng: 27.578953},
                ex: "",
                img: "/bitrix/templates/gar_new/img/shop_pp.jpg",
                link: "https://yandex.by/maps/157/minsk/?from=tabbar&ll=27.579384%2C53.911598&mode=search&oid=1182970853&ol=biz&sll=27.578916%2C53.911267&sspn=0.246506%2C0.086858&text=%D0%B3.%20%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%2C%20%D0%BF%D1%80-%D1%82%20%D0%9D%D0%B5%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8%2C%2044%20%D0%97%D0%BE%D0%BE%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%20%C2%AB%D0%93%D0%B0%D1%80%D1%84%D0%B8%D0%BB%D0%B4%C2%BB&z=14",
                phone: [{
                    phone: "+375 (44) 517-02-92",
                    operator: "А1"
                },
                {
                    phone: "+375 (29) 828-38-55",
                    operator: "МТС"
                }],
                type: "FS",
                work: [{days: "ежедневно", time: "с 10 до 21"}]
            },
            {
                address: "Минск, ул. Притыцкого, 101а",
                coords: {lat: 53.906440, lng: 27.435267},
                ex: "",
                img: "/bitrix/templates/gar_new/img/shop_kg.jpg",
                link: "https://yandex.by/maps/org/garfild/49115800596/?ll=27.436593%2C53.906313&z=18",
                phone: [{
                    phone: "+375 (29) 692-40-10",
                    operator: "А1"
                },
                {
                    phone: "+375 (29) 587-50-72",
                    operator: "МТС"
                }
                ],
                type: "FS",
                work: [{days: "ежедневно", time: "с 9 до 22"}]
            },
            {
                address: "Минск, пр-т Независимости, 168/1",
                coords: {lat: 53.944863, lng: 27.689234},
                ex: "",
                img: "/bitrix/templates/gar_new/img/shop_uruche.jpg",
                link: "https://yandex.by/maps/org/garfild/53432952887/?ll=27.689234%2C53.944863&z=15.33",
                phone: [{
                    phone: "+375 (44) 555-44-35",
                    operator: "А1"
                },
                {
                    phone: "+375 (33) 631-09-08",
                    operator: "МТС"
                }],
                type: "FS",
                work: [{days: "ежедневно", time: "с 9 до 22"}]
            },
            {
                address: "Минск, пр-т Независимости, 143/1",
                coords: {lat: 53.934005, lng: 27.647442},
                ex: "",
                img: "/upload/iblock/871/71gxvylbkbr54jumedci40w49hfd7y6x/image%20163.jpg",
                link: "https://yandex.by/maps/157/minsk/?ll=27.647329%2C53.933973&mode=poi&poi%5Bpoint%5D=27.647192%2C53.933981&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D66443098969&utm_source=share&z=19",
                phone: [{
                    phone: "+375 (44) 770-87-41",
                    operator: "А1"
                }],
                type: "FS",
                work: [{days: "ежедневно", time: "с 9 до 22"}],
            },
        ]

    ymaps.ready(init);
    function init() {
        showSalonsMap('map', markers, zoom, center);
    }

    function showSalonsMap(id, markers, zoom, center) {
        var salonMap = new ymaps.Map(id, {
            center: center || [markers[0]['coords']['lat'], markers[0]['coords']['lng']],
            zoom: zoom,
            controls: ['zoomControl']
        });
        var classIconBrend = ymaps.templateLayoutFactory.createClass('<div class="map-sklad-ico" style="background: {{ properties.bgc }};"></div>'),
            classIconSalon = ymaps.templateLayoutFactory.createClass('<div class="map-salon-ico" style="background: {{ properties.bgc }};"><span>G</span></div>'),
            classIconClaster = ymaps.templateLayoutFactory.createClass('<div class="map-salon-ico" style="background: {{ properties.bgc }};"><span>{{ properties.geoObjects.length }}</span></div>'),
            classBalloonContent = ymaps.templateLayoutFactory.createClass(
                '{% if properties.balloonImg %}' +
                '<div class="map-salon-img"><img src="{{ properties.balloonImg }}"></div>' +
                '{% endif %}' +
                '<div class="map-tooltip__body">' +
                '<div class="map-tooltip__desc">' +
                // '<p class="c-map-tooltip__name">{{ properties.balloonTitle }}</p>' +

                '<p class="map-salon-address">' +
                // '{% if properties.balloonLink %}' +
                // '<a class="linkType2" href="{{properties.balloonLink}}" target="_blank">' +
                // '{% endif %}' +
                '{{ properties.balloonAddress }}' +
                // '{% if properties.balloonLink %}' +
                // '</a>' +
                // '{% endif %}' +
                '</p>' +
                '{% if properties.balloonEx %}' +
                '<p class="map-label">{{ properties.balloonEx }} м²</p>' +
                '{% endif %}' +
                '</div>' +
                '<div class="map-tooltip__desc">' +
                '<div class="map-tooltip__worktime">' +
                '{% for work in properties.balloonWork %}' +
                '<p>{{ work.time }} {{ work.days }}</p>' +
                '</div>' +
                '<div class="map-tooltip__phone">' +
                '{% for phone in properties.balloonPhones %}' +
                '<p><a class="link" href="tel:{{ phone.phone }}">{{ phone.phone }}</a><span class="gray">{{phone.operator}}</span></p>' +
                '{% endfor %}' +
                '</div>' +
                '{% endfor %}' +
                '{% if properties.balloonLink %}' +
                '<a class="map-tooltip__route" target="_blank" ref="nofollow" href="{{ properties.balloonLink }}">Построить маршрут</a>' +
                '{% endif %}' +
                '</div>' +
                '</div>' +
                '</div>'
            ),
            classBalloon = ymaps.templateLayoutFactory.createClass(
                '<div class="map-tooltip">' +
                '$[[options.contentLayout observeSize minWidth=470 maxWidth=470]]' +
                '<div class="map-tooltip__arrow"></div>' +
                '</div>', {
                    build: function () {
                        this.constructor.superclass.build.call(this);
                        this._$element = $('.map-tooltip', this.getParentElement());
                        this.applyElementOffset();

                        this._$element[0].style.transform = 'translateY(0px)';
                        this._$element[0].style.opacity = 1;

                        salonMap.events.once('click', function () {
                            this.events.fire('userclose');
                        }.bind(this));
                    },
                    clear: function () {
                        this.constructor.superclass.clear.call(this);
                    },
                    applyElementOffset: function () {
                        this._$element.css({
                            left: -(this._$element[0].offsetWidth / 2),
                            top: -(this._$element[0].offsetHeight + 30)
                        });
                    },
                    onSublayoutSizeChange: function () {
                        classBalloon.superclass.onSublayoutSizeChange.apply(this, arguments);
                        if (!this._isElement(this._$element)) {
                            return;
                        }
                        this.applyElementOffset();
                        this.events.fire('shapechange');
                    },
                    getShape: function () {
                        if (!this._isElement(this._$element)) {
                            return classBalloon.superclass.getShape.call(this);
                        }
                        var position = this._$element.position();

                        return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                            [position.left, position.top], [
                                position.left + this._$element[0].offsetWidth,
                                position.top + this._$element[0].offsetHeight + 20
                            ]
                        ]))
                    },
                    _isElement: function (element) {
                        return element && element[0];
                    }
                }
            );

        ymaps.layout.storage.add('my#iconBrend', classIconBrend);
        ymaps.layout.storage.add('my#iconSalon', classIconSalon);
        ymaps.layout.storage.add('my#iconClaster', classIconClaster);
        ymaps.layout.storage.add('my#balloon', classBalloon);
        ymaps.layout.storage.add('my#balloonContent', classBalloonContent),
            clusterer = new ymaps.Clusterer({
                hasBalloon: false,
                hasHint: false,
                gridSize: 64,
                zoomMargin: 50,
                clusterIconLayout: 'my#iconClaster',
                geoObjectBalloonContentLayout: 'my#balloonContent',
                geoObjectBalloonLayout: 'my#balloon',
                iconShape: {
                    type: 'Circle',
                    coordinates: [0, 0],
                    radius: 20
                }
            });
        clusterer.events
            .add('mouseenter', function (e) {
                e.get('target').properties.set('bgc', '#B60000');
            })
            .add('mouseleave', function (e) {
                e.get('target').properties.set('bgc', '');
            });
        markers.forEach(function (item, i) {
            var placemark = new ymaps.Placemark(
                [item.coords.lat, item.coords.lng],
                {
                    balloonTitle: item.type === 'FS' ? 'Салон' : 'Склад',
                    balloonAddress: item.address,
                    balloonLink: item.link,
                    balloonEx: item.ex,
                    balloonPhones: item.phone,
                    balloonWork: item.work,
                    balloonImg: item.img,
                    markerType: item.type,
                    bgc: ''
                }, {
                    balloonPanelMaxMapArea: 0,
                    balloonAutoPanMargin: 60,
                    balloonShadow: false,
                    balloonOffset: item.type === 'FS' ? [0, -10] : [0, 0],
                    balloonContentLayout: 'my#balloonContent',
                    balloonLayout: 'my#balloon',
                    hasHint: false,
                    hideIconOnBalloonOpen: false,
                    iconLayout: 'default#image',
                    iconImageHref: iconPath,
                    iconImageSize: pointIconSize,
                    iconImageOffset: pointIconOffset,
                    //iconLayout: item.type === 'FS' ? 'my#iconSalon' : 'my#iconBrend',
                    // iconShape: {
                    //     type: 'Circle',
                    //     coordinates: [0, 0],
                    //     radius: item.type === 'FS' ? 20 : 10
                    // },

                }
            );


            salonMap.geoObjects.add(placemark);
            clusterer.add(placemark);
        })

        salonMap.geoObjects.add(clusterer);
    }
})