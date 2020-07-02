import React, { Component } from 'react';

export class FetchEvents extends Component {
    static displayName = FetchEvents.name;

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            nome: "",
            latitude: "",
            longitude: "",
            idAdmin: "",
            id: "",
            idUser: "",
            idEvent: "",
            loading: true
        };
    }

    async addEvent(nomeText, LatitudeFloat, LongitudeFloat, idInt) {
        const event = {
            "nome": nomeText,
            "dataHora": "2020-01-01",
            "longitude": parseFloat(LongitudeFloat),
            "latitude": parseFloat(LatitudeFloat),
            "tipoEvento": 0,
            "idAdmin": Number(idInt),
            "descricao": null,
            "idadeMinima": null,
            "idAdminNavigation": null,
            "eventoHasRequests": null,
            "utilizadorEvento": null,
            "votacao":null
        }

        await fetch('https://meeet-projeto.azurewebsites.net/api/meeet/PostEvento', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        }).then((update) => { this.populateEvents() });

    }

    async addUser(id_user, id_event) {
        const data = await fetch('https://meeet-projeto.azurewebsites.net/api/meeet/getevento/' + id_event, { mode: 'cors' });
        const event = await data.json();

        fetch('https://meeet-projeto.azurewebsites.net/api/meeet/addToEvent/' + id_user, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        }).then((update) => { this.populateEvents() });

    }

    async removeEvent(idInt) {

        const dataUserEvents = await fetch('https://meeet-projeto.azurewebsites.net/api/meeet/getusereventosperevent/' + idInt, { mode: 'cors' });
        const userEvents = await dataUserEvents.json();

        fetch('https://meeet-projeto.azurewebsites.net/api/meeet/DeleteuserEventos', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userEvents)
        });

        const dataEvent = await fetch('https://meeet-projeto.azurewebsites.net/api/meeet/getevento/' + idInt, { mode: 'cors' });
        const event = await dataEvent.json();

        fetch('https://meeet-projeto.azurewebsites.net/api/meeet/DeleteEvento', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        }).then((update) => { this.populateEvents() });

    }

    componentDidMount() {
        this.populateEvents();
    }

    handleNomeChange(event) {
        this.setState({ nome: event.target.value })
    }

    handleLatitudeChange(event) {
        this.setState({ latitude: event.target.value })
    }

    handleLongitudeChange(event) {
        this.setState({ longitude: event.target.value })
    }

    handleIdAdminChange(event) {
        this.setState({ idAdmin: event.target.value })
    }

    handleIdChange(event) {
        this.setState({ id: event.target.value })
    }

    handleIdUserChange(event) {
        this.setState({ idUser: event.target.value })
    }

    handleIdEventChange(event) {
        this.setState({ idEvent: event.target.value })
    }

    static renderEventsTable(events) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Data Hora</th>
                        <th>Longitude</th>
                        <th>Latitude</th>
                        <th>Id Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event =>
                        <tr key={event.id}>
                            <td>{event.id}</td>
                            <td>{event.nome}</td>
                            <td>{event.dataHora}</td>
                            <td>{event.longitude}</td>
                            <td>{event.latitude}</td>
                            <td>{event.idAdmin}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchEvents.renderEventsTable(this.state.events);

        return (
            <div>
                <h1 id="tabelLabel" >All Events</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
                <label>
                Nome:
                <input type="text" value={this.state.nome} onChange={this.handleNomeChange.bind(this)} />
                </label>
                <label>
                    Latitude:
                <input type="text" value={this.state.latitude} onChange={this.handleLatitudeChange.bind(this)} />
                </label>
                <label>
                    Longitude:
                <input type="text" value={this.state.longitude} onChange={this.handleLongitudeChange.bind(this)} />
                </label>
                <label>
                    Id de Admin:
                <input type="number" value={this.state.idAdmin} onChange={this.handleIdAdminChange.bind(this)} />
                </label>
                <button onClick={(e) => { this.addEvent(this.state.nome, this.state.latitude, this.state.longitude, this.state.idAdmin); }}>Add Event</button>

                <label>
                    Id de Evento:
                <input type="number" value={this.state.idEvent} onChange={this.handleIdEventChange.bind(this)} />
                </label>
                <label>
                    Id de User:
                <input type="number" value={this.state.idUser} onChange={this.handleIdUserChange.bind(this)} />
                </label>
                <button onClick={(e) => { this.addUser(this.state.idUser, this.state.idEvent); }}>Add User to Event</button>

                <label>
                    Id:
                <input type="number" value={this.state.id} onChange={this.handleIdChange.bind(this)} />
                </label>
                <button onClick={(e) => { this.removeEvent(this.state.id); }}>Remove Event</button>
            </div>
        );
    }

    async populateEvents() {
        const response = await fetch('https://meeet-projeto.azurewebsites.net/api/meeet/geteventos', { mode: 'cors' });
        const data = await response.json();
        console.log(data);
        this.setState({ events: data, loading: false });
    }
}
