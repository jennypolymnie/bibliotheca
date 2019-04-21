import React from 'react';
import {
    Form, Radio
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const AnotherTheme = props => (

    <Form>
        <Form.Field label="Intérêt de collaboration sur un autre thème que les votres" />
        <Form.Field>
            <Radio
                label="Oui pour un projet de développement"
                name="DifferentTheme"
                value="developpement"
                checked={props.different}

            />
        </Form.Field>
        <Form.Field>
            <Radio
                label="Oui pour un projet de recherche"
                name="DifferentTheme"
                value="recherche"
                checked={props.different}

            />
        </Form.Field>
        <Form.Field>
            <Radio
                label="Oui pour un projet de validation"
                name="DifferentTheme"
                value="validation"
                checked={props.different}

            />
        </Form.Field>
        <Form.Field>
            <Radio
                label="Non"
                name="DifferentTheme"
                value="non"
                checked={props.different}

            />
        </Form.Field>
    </Form>
);

AnotherTheme.propTypes = {
    different: PropTypes.string
};

AnotherTheme.defaultProps = {
    different: ''
};

export default AnotherTheme;
