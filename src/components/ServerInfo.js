import React from 'react';
import { withStyles } from '@material-ui/styles';
import axios from 'axios'

const styles = {
    main: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        display: 'flex',
        flexDirection: 'column',
    }
}

class ServerInfo extends React.Component {

    constructor() {
        super();
        this.state = {
            status: false,
            players: []
        }
        this.handleRefresh = this.handleRefresh.bind(this)
    }
    
    componentDidMount() {
        this.handleRefresh();
    }

    handleRefresh() {
        axios({
            method: 'get',
            url: 'https://u62on5hl8h.execute-api.us-west-2.amazonaws.com/live/players',
            // headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded' 
            // }
        }).then(res => {
            if (res.status === 200) {
                this.setState({status:true, players:res.data});
            } else {
                this.setState({status:false});
            }
        }).catch(err=>{
            this.setState({status:false});
        })

    }


    render() {
        const { classes } = this.props;

        let serverStatus;

        if (this.state.status) {
            serverStatus = 
                <div>
                    <p>{this.state.players.length} players online.</p>
                    {this.state.players.length>0? <p>Players:</p>:null}
                    {this.state.players.map(player=><li key={player.uuid}>{player.name}</li>)}
                </div>
        } else {
            serverStatus = <p>Server Stopped</p>
        }

        return (
            <div className={classes.main}>
                <p>Server Status: </p>
                <button className={classes.refreshButton} onClick={this.handleRefresh}>Refresh</button>
                {serverStatus}
            </div>
        );
    }
}

export default withStyles(styles)(ServerInfo);
