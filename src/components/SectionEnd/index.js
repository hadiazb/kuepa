import React from 'react';
import { FooterSection } from './style';
import { DataTable } from '../DataTable/index';
import { DatePlans } from '../DatePlans/index';

export const SectionEnd = () => {
	return (
		<FooterSection>
			<DataTable />
			<DatePlans />
		</FooterSection>
	);
};
