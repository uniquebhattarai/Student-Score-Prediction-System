import { Route, Routes, useLocation } from "react-router-dom";
import StudentDashboard from "./pages/Student/StudentDashboard";
import Login from "./pages/Login";
import Attendance from "./pages/Student/Attendance";
import Profile from "./pages/Profile";
import PrivateRoute from "./component/PrivateRoute";
import { Navbar } from "./component/Navbar";
import { useState, useEffect } from "react";
import { useAuth } from "@context/AuthContext";
// import TeacherDashboard from "./pages/Teacher/TeacherDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminAttendance from "./pages/Admin/AdminAttendance";
import TeacherAttendance from "./pages/Teacher/TeacherAttendance";
import TeacherAssignment from "./pages/Teacher/TeacherAssignment";
import StudentAssignment from "./pages/Student/StudentAssignment";
import AddAssignment from "./pages/Teacher/AddAssignment";
import { ClassList,SubjectList } from "./services/Apis";
import AssignmentDetails from "./pages/Teacher/AssignmentDetails";
import ViewAssignment from "./pages/Student/ViewAssignment";
import Tmarksheet from "./pages/Teacher/Tmarksheet";
import AddMarksheet from "./pages/Teacher/AddMarksheet";
import ViewMarksheet from "./pages/Student/ViewMarksheet";
import ManageUser from "./pages/Admin/ManageUser";
import RegisterUser from "./pages/Admin/RegisterUser";
import AttendanceById from "./pages/Admin/AttendanceById";
import MarkAssignment from "./pages/Teacher/MarkAssignment";
import ClassParticipation from "./pages/Admin/ClassParticipation";
import AdminPrediction from "./pages/Admin/AdminPrediction";
import HomePage from "./pages/HomePage.tsx";

function App() {
  // Auth state is managed by AuthContext — read from it here
  const { fullName, photoUrl, role } = useAuth();

  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");

  const location = useLocation();


  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const data = await ClassList();
        setClasses(data);
      } catch (error) {
        console.error("Error loading class list", error);
      }
    };

    fetchClasses();
  }, []);

  // Fetch subjects when selected class changes
  useEffect(() => {
    const fetchSubjects = async () => {
      if (selectedClass) {
        try {
          const subjectData = await SubjectList(selectedClass);
          setSubjects(subjectData);
        } catch (error) {
          console.error("Error loading subject list", error);
        }
      }
    };

    fetchSubjects();
  }, [selectedClass]);

  const showNavbar = location.pathname !== "/" && location.pathname !== "/login";

  return (
    <div className="w-screen min-h-screen bg-background">
      {showNavbar && (
        <Navbar
          fullName={fullName}
          photoUrl={photoUrl}
          role={role}
        />
      )}
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student/dashboard" element={<PrivateRoute expectedRole="student" ><StudentDashboard /></PrivateRoute> }/>
        <Route path="/student/attendance"element={<PrivateRoute expectedRole="student" ><Attendance /></PrivateRoute>}/>
        <Route path="/student/assignment"element={<PrivateRoute expectedRole="student" ><StudentAssignment /></PrivateRoute>}/>
        <Route path="/student/assignment/details/:id" element={<PrivateRoute expectedRole="student" ><ViewAssignment/></PrivateRoute>}/>
        <Route path="/student/grades" element={<PrivateRoute expectedRole="student" ><ViewMarksheet/></PrivateRoute>}/>
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}/>
        <Route path="/teacher/dashboard" element={<PrivateRoute expectedRole="teacher" ><AdminDashboard role="teacher" /></PrivateRoute>} />
        <Route path="/teacher/attendance" element={<PrivateRoute expectedRole="teacher" ><TeacherAttendance classes={classes}
            selectedClass={selectedClass} setSelectedClass={setSelectedClass} /></PrivateRoute>} />
        <Route path="/teacher/assignment" element={<PrivateRoute expectedRole="teacher" ><TeacherAssignment  role="teacher"  classes={classes}
            subjects={subjects}
            selectedClass={selectedClass}
            setSelectedClass={setSelectedClass} /></PrivateRoute>} />
        <Route path="/teacher/create/assignment" element={<PrivateRoute expectedRole="teacher" ><AddAssignment  role="teacher" classes={classes}
            subjects={subjects} selectedClass={selectedClass}   setSelectedClass={setSelectedClass}  /></PrivateRoute>} />
          <Route path="/teacher/assignment/details/:id" element={<PrivateRoute expectedRole="teacher" ><AssignmentDetails role="teacher" /></PrivateRoute>}/>
          <Route path="/teacher/student-attendance/:id" element={<PrivateRoute expectedRole="teacher" ><AttendanceById  /></PrivateRoute>}/>
          <Route path="/admin/student-attendance/:id" element={<PrivateRoute expectedRole="admin" ><AttendanceById  /></PrivateRoute>}/>
          <Route path="/admin/assignment/details/:id" element={<PrivateRoute expectedRole="admin" ><AssignmentDetails role="admin" /></PrivateRoute>}/>
          <Route path="/admin/mark/assignment/:id" element={<PrivateRoute expectedRole="admin" ><MarkAssignment role="admin" /></PrivateRoute>}/>
          <Route path="/teacher/mark/assignment/:id" element={<PrivateRoute expectedRole="teacher" ><MarkAssignment role="teacher" /></PrivateRoute>}/>
          <Route path="/teacher/marksheet" element={<PrivateRoute expectedRole="teacher" ><Tmarksheet  role="teacher" /></PrivateRoute>}/>
          <Route path="/teacher/create/marksheet" element={<PrivateRoute expectedRole="teacher" ><AddMarksheet  role="teacher" /></PrivateRoute>}/>
          <Route path="/admin/marksheet" element={<PrivateRoute expectedRole="admin" ><Tmarksheet  role="admin" /></PrivateRoute>}/>
          <Route path="/admin/create/marksheet" element={<PrivateRoute expectedRole="admin" ><AddMarksheet  role="admin" /></PrivateRoute>}/>
        <Route path="/admin/dashboard" element={<PrivateRoute expectedRole="admin" ><AdminDashboard role="admin" /></PrivateRoute>} />
        <Route path="/admin/prediction" element={<PrivateRoute expectedRole="admin" ><AdminPrediction role="admin" /></PrivateRoute>} />
        <Route path="/teacher/prediction" element={<PrivateRoute expectedRole="teacher" ><AdminPrediction role="teacher" /></PrivateRoute>} />
        <Route path="/admin/manageuser" element={<PrivateRoute expectedRole="admin" ><ManageUser/></PrivateRoute>} />
        <Route path="/admin/classparticipation" element={<PrivateRoute expectedRole="admin" ><ClassParticipation/></PrivateRoute>} />
        <Route path="/teacher/classparticipation" element={<PrivateRoute expectedRole="teacher" ><ClassParticipation/></PrivateRoute>} />
        <Route path="/admin/register-user" element={<PrivateRoute expectedRole="admin" ><RegisterUser/></PrivateRoute>} />
        <Route path="/admin/attendance" element={<PrivateRoute expectedRole="admin" ><AdminAttendance classes={classes}
            selectedClass={selectedClass} setSelectedClass={setSelectedClass} /></PrivateRoute>} />
        <Route path="/admin/assignment" element={<PrivateRoute expectedRole="admin" ><TeacherAssignment  role="admin" classes={classes}
            subjects={subjects}
            selectedClass={selectedClass}    setSelectedClass={setSelectedClass} /></PrivateRoute>} />
            <Route path="/admin/create/assignment" element={<PrivateRoute expectedRole="admin" ><AddAssignment  role="admin" classes={classes}
            subjects={subjects} selectedClass={selectedClass}   setSelectedClass={setSelectedClass}  /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
