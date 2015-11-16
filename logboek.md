# Logboek PLP-3

## 15.09.26

### Inlezen

Online aan het lezen over asynchronous en modulair Javscript.

### Hello world

Hello world gemaakt met requireJS. Kijken hoe meerdere bestanden geladen worden.

### use strict

- Geleerd over ```'use strict'``` en het gebruik ervan (geeft warnings als je Javascript op 'foute' manieren gebruikt). Daarna in mijn code gebruikt.

### Game loop

- Lezen over game loops in Javascript. Het beste is om requestAnimationFrame te gebruiken
- Game loop aangemaakt, met requestAnimationFrame.

### Canvas en ctx

Met behulp van Canvas en ctx (Context) heb ik de ballen laten tekenen op het scherm.

### 'Compilation'

Omdat Javascript geen compiler heeft en geen mogelijkheid bied op compile time errors heb ik JSHint geïnstalleerd als plugin voor Sublime Text. Daarmee kan je met ```ctrl + j``` de syntax van je huidige bestand laten checken en daarmee tenminste syntax errors vermijden.

### Ternary

Gebruik gemaakt van ternary voor het intialiseren met default values:

```javascript
return function (pX) {
	x = pX ? pX : Math.floor(Math.random() * (c.canvasWidth - radius - radius)) + radius;
}
```

Als hier parameter ```pX``` wordt meegeleverd, dan wordt ```x``` daaraan gelijkgesteld. Zo niet, dan wordt een nieuwe waarde uitgerekend:

```javascript
Math.floor(Math.random() * (c.canvasWidth - radius - radius)) + radius;
```

Dit is een andere manier om het te schrijven:

```javascript
return function (pX) {
	x = pX || 0;
}
```

### Hoe instances te verwijderen in Javascript

Om de performance van het programma snel te houden wilde ik een cap zetten op het aantal objecten wat maximaal tegelijk on-screen kan zijn. Daarvoor moest ik de oudste objecten verwijderen. De manier om dit te doen is om de references naar de instance te verwijderen en dan zal de garbage collector van Javascript het object zelf verwijderen.

In mijn geval komt het neer om de ```shift()``` aan te roepen op de object array.

#### Mogelijke performance fix (niet toegepast)

Ik merk dat de framerate omlaagvalt als er veel objecten op het scherm zijn en er dan nieuwe ojecten bij moeten worden gemaakt. Maar daarna gaat het weer vloeiend. Ik vermoed dat het aanmaken van nieuwe instances veel resources gebruikt. Een mogelijke oplossing voor dit is een object pool, waarbij de objecten aan het begin worden aangemaakt en de performance hit tijdens een onbelangrijk moment plaatsvindt.

Tijdens dit PLP-vak zal ik hier niet op in gaan omdat het maken van object pools niet zonder moeilijkheden is en er nu geen tijd is voor ongeplande bugs.

### Object Manager

Een aparte class toegevoegd die het toevoegen, updaten, en drawen van objects regelt. Wordt gebruikt om de functionaliteit van dat soort functies te creeeren zonder dat alle objecten het moeten hebben. Er wordt bijvoorbeeld eerst gecheckt of er een ```init``` functie is, en als die er is dan wordt het aangeroepen:

```javascript
var add = function (object) {
    objects.push(object);
    if (object.init)
        object.init();
}
```

In de Ball class ziet de init er bijvoorbeeld zo uit:

```javascript
init: function () {
    this.setGravity(new Vector2(0, 0.25));
    pos = pos.add(velocity);
}
```