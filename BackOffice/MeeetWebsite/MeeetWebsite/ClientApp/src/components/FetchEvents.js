import React, { Component } from 'react';

export class FetchEvents extends Component {
    static displayName = FetchEvents.name;

    constructor(props) {
        super(props);
        this.state = { events: [], loading: true };
    }

    componentDidMount() {
        this.populateEvents();
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
