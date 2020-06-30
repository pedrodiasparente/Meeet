import React, { Component } from 'react';

export class FetchGroups extends Component {
    static displayName = FetchGroups.name;

    constructor(props) {
        super(props);
        this.state = { groups: [], loading: true };
    }

    componentDidMount() {
        this.populateGroups();
    }

    static renderGroupsTable(groups) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {groups.map(group =>
                        <tr key={group.id}>
                            <td>{group.id}</td>
                            <td>{group.nome}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchGroups.renderGroupsTable(this.state.groups);

        return (
            <div>
                <h1 id="tabelLabel" >All Groups</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateGroups() {
        const response = await fetch('https://meeet-projeto.azurewebsites.net/api/meeet', { mode: 'cors' });
        const data = await response.json();
        console.log(data);
        this.setState({ groups: data, loading: false });
    }
}
