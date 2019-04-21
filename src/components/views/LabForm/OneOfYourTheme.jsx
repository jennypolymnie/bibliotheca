import React from 'react';
import {
    Form, Radio
} from 'semantic-ui-react';
import PropTypes from 'prop-types';


const OneOfYourTheme = props => (


    <Form>
        <Form.Field label="Intérêt de collaboration sur un de vos thèmes" />
        <Form.Field>
            <Radio
                label="Oui pour un projet de développement"
                name="SameTheme"
                value="developpement"
                checked={props.same}

            />
        </Form.Field>
        <Form.Field>
            <Radio
                label="Oui pour un projet de recherche"
                name="SameTheme"
                value="recherche"
                checked={props.same}

            />
        </Form.Field>
        <Form.Field>
            <Radio
                label="Oui pour un projet de validation"
                name="SameTheme"
                value="validation"
                checked={props.same}

            />
        </Form.Field>
        <Form.Field>
            <Radio
                label="Non"
                name="SameTheme"
                value="non"
                checked={props.same}

            />
        </Form.Field>
    </Form>
);

OneOfYourTheme.propTypes = {
    same: PropTypes.string
};

OneOfYourTheme.defaultProps = {
    same: ''
};
export default OneOfYourTheme;
