import React, {Component} from 'react';
import {
    Container,
    Text
} from 'native-base';
import {connect} from "react-redux";

class HomeScreen extends Component {

    constructor(props){
        super(props);
        console.log(props);
    }

    render() {
        return (
            <Container
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    backgroundColor: '#f2f2f2',
                }}
            >
                <Text>Hello World</Text>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)
