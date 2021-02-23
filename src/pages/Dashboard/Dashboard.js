import useUserContext from '../../hooks/useUserContext';

import userImage from '../../assets/images/default.jpg';

const Dashboard = () => {
    const { user } = useUserContext();

    if (!user) return null;

    const userMeta = [
        {
            label: 'Name',
            value: user.displayName || '',
        },
        {
            label: 'Server',
            value: user.server || 'Leviathan',
        },
        {
            label: 'Job',
            value: user?.jobs?.main || 'Paladin',
        },
        {
            label: 'ILvl',
            value: user.iLvl || '9999',
        },
    ];

    return user ? (
        <div className='flex justify-center my-10 m-4'>
            <div className='grid grid-cols-12 max-w-screen-xl'>
                <div className='col-start-1 col-end-3 border border-black rounded shadow'>
                    <div className='grid grid-rows-2'>
                        <div>
                            <img src={userImage} />
                        </div>
                        {/* <img src={user.avatar} /> */}
                        <div className='flex-1 flex flex-col justify-center p-2 border-t border-black'>
                            {userMeta.map(({ label, value }) => (
                                <h2 className='flex-1 flex items-center mx-2'>
                                    <p className='text-sm'>
                                        <span className='font-bold font-rubik '>
                                            {label}:
                                        </span>
                                        <span className='pl-2'>{value}</span>
                                    </p>
                                </h2>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='col-start-4 col-end-13 bg-black'></div>
            </div>
        </div>
    ) : null;
};

export default Dashboard;
