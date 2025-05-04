type InstrumentType = 'viento' | 'cuerda' | 'percusion'

abstract class Instrument {
    constructor(public type: InstrumentType){}

    play() {}
}

class Guitar extends Instrument {
    constructor(){
        super('cuerda')

        
        }
        play() {
            console.log ('🎸 strum strum strum ')
    }
}

class Flute extends Instrument {
    constructor(){
        super('viento')
    }

    play() {
        console.log ('🪈 tuuu tuuu tuuu ')
}

}

class Drums extends Instrument{
    constructor(){
        super('percusion')
   
  }
  play(){
    console.log('boom boom')
}
}

const guitar1 = new Guitar()
const flute1 = new Flute()
const drums1 = new Drums()

guitar1.play()
flute1.play()

class Artist {
    constructor(){}

    playInstrument(Instrument: Instrument) {
        Instrument.play()

    }
}

const artist1 = new Artist()

artist1.playInstrument(guitar1)
artist1.playInstrument(flute1)
artist1.playInstrument(drums1)


