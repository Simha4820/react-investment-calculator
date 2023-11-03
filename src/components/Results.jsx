import { calculateInvestmentResults,formatter } from "../util/investment";
const Results = ({input}) => {
  const results=calculateInvestmentResults(input);
  return(
      <center>
    <table id="result">
      <thead>
        <tr>
          <th> Year </th>
          <th> Interest </th>
          <th> Value End Of Year </th>
          <th> Annual Investment </th>
          </tr>
        </thead>
        <tbody>
          {results.map(item=><tr key={item.year}>
            <td> {item.year} </td>
            <td> {formatter.format(item.interest)} </td>
            <td> {formatter.format(item.valueEndOfYear)} </td>
            <td> {formatter.format(item.annualInvestment)} </td>
          </tr>)}
          </tbody>
      </table>
      </center>

  )
}
export default Results;