import DataItem from "./DataItem";

function Data(props) {
    console.log("Data  => ", props);
    return (
        <>
            <table className="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Total Savings</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((dataItem) => <DataItem year={dataItem.year} totalSaving={dataItem.savingsEndOfYear} interest={dataItem.yearlyInterest} totalInterest={dataItem.yearlyContribution} investedCapital={dataItem.yearlyInterest}></DataItem>)}
                </tbody>
            </table>
        </>
    );
}

export default Data;