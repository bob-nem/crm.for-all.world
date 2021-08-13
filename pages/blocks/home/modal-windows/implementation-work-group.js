const content = {
  display: "flex",
  backgroundColor: "#fff",
  backgroundImage: "url(./components/employees-group.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: "1.2rem",
  padding: "2%",
  width: "65%",
  height: "65%",
  margin: "auto",
  outline: "1px solid #ffcf46",
  zIndex: 4
};

export default function SecondBlock() {
  return (
    <div style={content}>
      <p>Focused on large businesses, the package provides an operational and complete display of information for immediate decision-making and strategic planning. To fully take advantage of its advantages, it is necessary to develop and accurately implement a well-thought-out ERP system implementation plan. The work is complicated by the fact that the toolkit covers all levels — from the initial data entry from registers to decision-making by management. Employees (ideally, as the principle of work provides) perform each operation at a strictly defined moment, and it is instantly reflected in the system, affecting all its other "nodes".<br />
The group should include:<br />
1. Specially trained employees of the software supplier company.<br />
2. The head (preferably from among the top managers of the company). This person should be well versed in all aspects of the company's activities and the organization of business processes. In addition, the ERP implementation project manager should be able to make sole decisions on any issues that arise.<br />
3. Managers and specialists of all departments responsible for the compliance of the system with the requirements of current legislation and corporate standards and who will work in the ERP system. Accountants, storekeepers, freight forwarders, sales managers, employees of the design and technical department, engineers, production workers and all the necessary specialized employees. Their tasks will include advising implementers at the stage of studying the business processes of the enterprise and organizing the work of departments after the automation process is completed.<br />
4. IT specialist of a wide profile. His area of responsibility will be the technical support of the project. </p>
    </div>
  );
}
