import React from 'react';

import styles from './home.module.scss';
import { Typography } from '../../components/typography/typography.component';
import {
    TYPOGRAPHY_FONT_WEIGH_ENUM,
    TYPOGRAPHY_STYLE_ENUM,
    TYPOGRAPHY_VARIANT_ENUM,
} from '../../typescript/enums';

export const Home: React.FC = (): JSX.Element => {
    return (
        <div className={styles.root}>
            <div>
                <Typography
                    value="Home"
                    variant={TYPOGRAPHY_VARIANT_ENUM.HEADING_1}
                    style={TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL}
                    weight={TYPOGRAPHY_FONT_WEIGH_ENUM.LIGHT}
                />
                <Typography
                    value="Home"
                    variant={TYPOGRAPHY_VARIANT_ENUM.HEADING_1}
                    style={TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL}
                    weight={TYPOGRAPHY_FONT_WEIGH_ENUM.REGULAR}
                />
                <Typography
                    value="Home"
                    variant={TYPOGRAPHY_VARIANT_ENUM.HEADING_1}
                    style={TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL}
                    weight={TYPOGRAPHY_FONT_WEIGH_ENUM.SEMI_BOLD}
                />{' '}
                <Typography
                    value="Home"
                    variant={TYPOGRAPHY_VARIANT_ENUM.HEADING_1}
                    style={TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL}
                    weight={TYPOGRAPHY_FONT_WEIGH_ENUM.BOLD}
                />
                <Typography
                    value="Home"
                    variant={TYPOGRAPHY_VARIANT_ENUM.HEADING_1}
                    style={TYPOGRAPHY_STYLE_ENUM.UPPER_CASE_ALL}
                    weight={TYPOGRAPHY_FONT_WEIGH_ENUM.EXTRA_BOLD}
                />
            </div>
        </div>
    );
};
