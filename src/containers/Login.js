import React, {Component} from 'react';
import {Container, Content, Form, Item, Input, Icon, Button, Text} from 'native-base';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Login extends Component {

    constructor(props){
        super(props);
        console.log(props);
    }

    login = ()=>{
        this.props.userActions.login({
            username: 'shuai',
            password: 'ffffff'
        });
        this.props.navigation.navigate('Home');
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
                <Content>
                    <Icon
                        style={{
                            marginTop: 50,
                            fontSize: 125,
                            alignSelf: 'center',
                            color: '#495057',
                        }}
                        name="ios-pulse"
                    />
                    <Form style={{marginLeft: 25, marginRight: 25, marginBottom: 110}}>
                        <Item
                            regular
                            style={{
                                marginTop: 50,
                                paddingRight: 20,
                                paddingLeft: 20,
                                backgroundColor: '#ffffff'
                            }}
                        >
                            <Input
                                style={{
                                    color: '#495057',
                                }}
                                placeholder="Email"
                                placeholderTextColor="#495057"
                            />
                        </Item>
                        <Item
                            regular
                            style={{
                                marginTop: 10,
                                paddingRight: 20,
                                paddingLeft: 20,
                                backgroundColor: '#ffffff'
                            }}
                        >
                            <Input
                                style={{
                                    backgroundColor: '#ffffff',
                                    color: '#495057'
                                }}
                                secureTextEntry={true}
                                placeholder="Password"
                                placeholderTextColor="#495057"
                            />
                        </Item>
                        <Button
                            full
                            style={{
                                marginTop: 30
                            }}
                            onPress={this.login}
                        >
                            <Text>Login</Text>
                        </Button>
                    </Form>
                </Content>
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
    return {
        userActions: bindActionCreators(Action.user, dispatch),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)