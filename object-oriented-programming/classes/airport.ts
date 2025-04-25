/*
El objetivo es crear una clase que represente una clase Airport, que modele las caracteristicas y operaciones de un aeropuerto de forma mas avanzada.

Cada Aeropuerto tiene:
Un nombre
Ubicacion
Una pista de aterrizaja (runway)
Un nivel de trafico aereo (low, medium, high)
La clase debe incluir:

Un metodo changeTrafficLevel que permita cambiar el nivel de trafico aereo del aeropuerto.
Un metodo emergencyLanding que cierre la pista de aterrizaje y marque el nivel de trafico como alto.
Un metodo displayInfo que muestre el nombre del aeropuerto, la ubicacion y el estado actual de la pista y el nivel de trafico.
Crea una instancia de clase Airport y de4muestra el uso de estos metodos con distancia.

*/

type TrafficLevel = 'low' | 'medium' | 'high';

class Airport {
  constructor(
    private _nombre: string,
    private _ubicacion: string,
    private _runwayStatus: boolean = true,
    private _trafficLevel: TrafficLevel = 'low'
  ) {}


  get runwayStatus() {
    return this._runwayStatus;
  }

  set runwayStatus(status: boolean) {
    this._runwayStatus = status;
  }

 
  get trafficLevel() {
    return this._trafficLevel;
  }

  set trafficLevel(level: TrafficLevel) {
    this._trafficLevel = level;
  }


  public changeTrafficLevel(level: TrafficLevel): void {
    this.trafficLevel = level;
    console.log(`El nivel de tráfico se ha cambiado a ${level} en el aeropuerto ${this._nombre}`);
  }


  public emergencyLanding(): void {
    this.runwayStatus = false;
    this.trafficLevel = 'high';
    console.log(`¡Aterrizaje de emergencia en el aeropuerto ${this._nombre}! Nivel de tráfico ahora: high`);
  }


  public displayInfo(): void {
    console.log(`Nombre: ${this._nombre}`);
    console.log(`Ubicación: ${this._ubicacion}`);
    console.log(`Estado de pista: ${this._runwayStatus}`);
    console.log(`Nivel de tráfico: ${this._trafficLevel}`);
  }
}

const aeropuerto1 = new Airport("Juan Santamaría", "Alajuela");

aeropuerto1.displayInfo();
aeropuerto1.changeTrafficLevel("high");
aeropuerto1.emergencyLanding();
aeropuerto1.displayInfo();