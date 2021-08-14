import style from '../../../styles/HomePrices.module.css';
import Image from 'next/image';

import {Tabs} from './components/Tabs';

export default function Prices() {
  return (
    <div className={style.Container}>
      <h2 className={style.MainHeader}>categories of solutions and their prices</h2>
      <p className={style.MainHeaderDescription}>Please note that depending on the set of functions and the presence of special conditions in the technical specification of the customer, the price may vary greatly. These prices are valid for the installation and configuration of a standard basic package.</p>
      <div className={style.TabsContainer}>
        <Tabs>
          <div label="CRM - Customer Relationships Management" className={style.OneTabContainer}>
            <p>
              These systems are built to make customers happy, whether it’s through improved ad targeting or tailored sales communications. CRM software is a front-office tool that is used by employees in departments such as sales and marketing to increase revenue through an improvement in customer experience. After all, without a solid customer base, your company doesn’t have much to go on. These programs are available as either standalone software or as part of an ERP solution.
            </p>
          </div>
          <div label="ERP - Enterprise Resource Planning">
            <h2>Tab 2</h2>
            <p>
              Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Neque volutpat ac tincidunt vitae. Nec nam aliquam sem et tortor consequat id porta nibh. Mattis aliquam faucibus purus in massa tempor nec. Amet consectetur adipiscing elit ut aliquam purus. Aenean vel elit scelerisque mauris pellentesque. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Scelerisque mauris pellentesque pulvinar pellentesque. Non curabitur gravida arcu ac. Molestie at elementum eu facilisis sed odio morbi quis. Adipiscing elit duis tristique sollicitudin nibh sit. Risus ultricies tristique nulla aliquet enim tortor at auctor. Id eu nisl nunc mi ipsum. Sagittis orci a scelerisque purus semper eget.
            </p>
          </div>
          <div label="SCADA - Supervisory Control and Data Acquisition">
            <h2>Tab 3</h2>
            <p>
              Eget nunc scelerisque viverra mauris in aliquam. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Nibh sed pulvinar proin gravida hendrerit lectus. Egestas tellus rutrum tellus pellentesque eu tincidunt. Tempus iaculis urna id volutpat lacus laoreet non curabitur.
            </p>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
