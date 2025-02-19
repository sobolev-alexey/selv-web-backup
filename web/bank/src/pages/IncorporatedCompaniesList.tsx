import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import useStep from '../utils/useStep';
import useFetch from '../utils/useFetch';
import { Layout, Table, NextStepDrawer } from '../components';
import { serverAPI } from '../config.json';

/**
 * Component which will display a IncorporatedCompanies.
 */
const IncorporatedCompanies: React.FC = ({ history, match, ...props }: any) => {
    const { nextStep } = useStep(match);
    const { response, loading } = useFetch(`${serverAPI}/company`);

    function onRowClick (data: any) {
        history.push(`/company/details/${match?.params?.step || 0}/${data.CompanyNumber}`);
    }
    const drawer = props?.location?.state?.nextStep ? 'drawer' : '';

    return (
        <Layout match={match}>
            <React.Fragment>
                <div className={`companies-page-wrapper ${drawer}`}>
                    <div className='companies-cta-wrapper'>
                        <h2>Newly Incorporated Companies</h2>
                        {
                            props?.location?.state?.nextStep ? (
                                <Link to={props?.location?.state?.nextStep}>
                                    <Button>
                                        Continue to next step
                                    </Button>
                                </Link>
                            ) : (
                                <Link to={nextStep}>
                                    <Button>
                                        Register new Company
                                    </Button>
                                </Link>
                            )
                        }
                    </div>
                    <Table
                        data={response && response.data}
                        onRowClick={onRowClick}
                        loading={loading}
                    />
                </div>
                <NextStepDrawer link={props?.location?.state?.nextStep} />
            </React.Fragment>
        </Layout>
    );
};

export default IncorporatedCompanies;
