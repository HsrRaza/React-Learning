// {
//   id: number,
//   type: "income" | "expense",
//   amount: number,
//   category: string,
//   date: string,
//   note?: string
// }  


import FormInput from '../../components/FormInput';
import Table from '../../components/Table';

const HomePage = () => {



    return (
        <div className='p-2 '>
            <h2 className='m-1'>Add Your  Expense </h2>

           {/* Form */}

           <FormInput/>
            {/* table */}
            <Table />
        </div>
       




    )
}

export default HomePage