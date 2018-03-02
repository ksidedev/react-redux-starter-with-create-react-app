import { connect } from 'react-redux'
import { helloWorld, reset } from './../actions'
import ChangeText from './../components/ChangeText'
import FormPost from './../components/FormPost'

import React, { Component, PropTypes } from 'react';

class Wrapper extends Component {
    render() {
        return(
            <div className="previewcomponent">
                <ChangeText />
                <FormPost />
            </div>
        );
    }
}

export default Wrapper;
