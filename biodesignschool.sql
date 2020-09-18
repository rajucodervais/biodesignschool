-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 14, 2020 at 10:03 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `biodesignschool`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) DEFAULT NULL,
  `profile_pic` varchar(200) DEFAULT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `email`, `password`, `profile_pic`, `first_name`, `last_name`, `createdAt`, `updatedAt`) VALUES
(1, 'rajuvais@gmail.com', '$2a$10$2cC.SkH4f69Tay62idxJ0OIqzpCpfUlwRsJGuK/RroC5HXlJ2uZDy', NULL, 'raju', 'vais', '2020-09-10 06:00:12', '2020-09-10 06:00:12');

-- --------------------------------------------------------

--
-- Table structure for table `applied`
--

CREATE TABLE `applied` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `registered_no` int(11) DEFAULT NULL,
  `post_id` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` longtext NOT NULL,
  `date_published` date NOT NULL,
  `from_date` date NOT NULL,
  `to_date` date NOT NULL,
  `slug` varchar(250) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `description`, `date_published`, `from_date`, `to_date`, `slug`, `createdAt`, `updatedAt`) VALUES
(6, 'SBI PO 2020 Exam Notification to be Out Soon', '<p><strong>SBI PO 2020</strong> exam will be conducted by State Bank of India (SBI) to select eligible candidates to the post of Probationary Officer. SBI PO is one of the most coveted jobs in Banking industry and a dream job for millions of aspirants across India. SBI PO is considered as a premium job opportunity in Banking sector because of following reasons:</p><p><strong>• Brand value of SBI and reputation associated with SBI PO post</strong></p><p><strong>• Lucrative pay scale which is highest among PSU Banks</strong></p><p><strong>• Growth opportunities where even a PO can progress to the level of Chairperson</strong></p><p><strong>• Job satisfaction and social prestige</strong></p><p>Before beginning with your preparation, you should get an idea about the latest updates, selection procedure, eligibility, exam pattern, syllabus, previous year cut off etc. Please go through this article to get all the important information for the <strong>SBI PO 2020</strong> Exam.</p><p><a href=\"https://www.careerpower.in/sbi-cbo-recruitment-2020.html\"><strong>SBI Circle Based Officers (CBO) 2020 Notification Out: Click Here to Check</strong></a></p><h2>SBI PO 2020 Notification</h2><p>The SBI PO 2020 Notification has not been released yet. As per the previous years trend, the official notification for SBI PO 2020 exam was expected to be released in <strong>the month of April to recruit 2000+ Probationary Officers (PO) but due to COVID-19 epidemic in India</strong>, It has been delayed. Like other exam conducting body, SBI has also delayed it onging exams (SBI Clerk Mains Exam). Now, all candidates who are waiting for this recruitment notification will have to wait till lockdown. If we get any news related to SBI PO 2020 exam will update here. All candidates can check this page regularly to get latest updates about SBI PO 2020 exam notification.</p>', '2020-09-12', '2020-09-13', '2020-09-14', 'sbi-po-2020-exam-notification-to-be-out-soon', '2020-09-12 09:29:14', '2020-09-12 12:04:15'),
(7, 'AIRPORTS AUTHORITY OF INDIA RECRUITMENT FOR 180 JUNIOR ASSISTANT VACANCY', '<figure class=\"table\"><table><tbody><tr><td colspan=\"2\"><p><strong>Airports Authority of India Recruitment for 180 Junior Assistant Vacancy: –</strong> Airports Authority of India (AAI) has released its notification for recruitment of 180 Junior Assistant posts. you want to make a career with the Airports Authority of India Job, then this is your chance. Apply for this Recruitment and make the most of this opportunity.</p><p>&nbsp;</p><p>&nbsp;</p></td></tr><tr><td><strong>Department:</strong></td><td>Airports Authority of India (AAI).</td></tr><tr><td><strong>Posts:</strong></td><td>Junior Assistant.</td></tr><tr><td><strong>Total posts:</strong></td><td>180 Posts.</td></tr><tr><td><strong>Eligibility:</strong></td><td>Engineering Degree.</td></tr><tr><td><strong>Age Limit:</strong></td><td>Maximum 27 years.</td></tr><tr><td><strong>Apply Fee:</strong></td><td>Rs.300/- for Gen/OBC &amp; No Fee for Female/ SC/ST/ PWD candidates.</td></tr><tr><td><strong>Extended Apply date:</strong></td><td>03 August 2020 to 15 September 2020.</td></tr></tbody></table></figure><p>&nbsp;</p><figure class=\"table\"><table><tbody><tr><td><strong>Salary:</strong></td><td>Rs.40,000/- to 1,40,000/- per month.</td></tr><tr><td><strong>Job Location:</strong></td><td>All India.</td></tr><tr><td><strong>Apply Mode:</strong></td><td>Online.</td></tr><tr><td><strong>Notification:</strong></td><td>03/2020.</td></tr><tr><td><strong>Official Website:</strong></td><td>https://www.aai.aero/</td></tr><tr><td colspan=\"2\">&nbsp;</td></tr><tr><td><strong>Note:</strong></td><td>Male &amp; Female candidates can apply.</td></tr></tbody></table></figure><p>&nbsp;</p><p><strong>Vacancy details of Airports Authority of India Recruitment: –</strong></p><p>&nbsp;</p><p><strong>Total Vacancy: – </strong>180 Posts.<br><strong>Name of post: – </strong>Junior Assistant.</p><p><strong>Eligibility Criteria for Airports Authority of India Recruitment: –</strong></p><figure class=\"image\"><img src=\"https://sarkarijobnews.com/wp-content/uploads/2019/01/vacancy-Qualification-photo.png\" alt=\"Airports Authority of India, Airports Authority of India recruitment, Airports Authority of India vacancy, AAI recruitment, AAI vacancy, Government job \" srcset=\"https://sarkarijobnews.com/wp-content/uploads/2019/01/vacancy-Qualification-photo.png 1228w, https://sarkarijobnews.com/wp-content/uploads/2019/01/vacancy-Qualification-photo-300x144.png 300w, https://sarkarijobnews.com/wp-content/uploads/2019/01/vacancy-Qualification-photo-1024x492.png 1024w, https://sarkarijobnews.com/wp-content/uploads/2019/01/vacancy-Qualification-photo-768x369.png 768w, https://sarkarijobnews.com/wp-content/uploads/2019/01/vacancy-Qualification-photo-400x192.png 400w\" sizes=\"100vw\" width=\"1228\"></figure><p><strong>Age Limit &amp; Relaxation: –</strong></p><ul><li>Maximum age limit for Unreserved/EWS is 27 years;</li><li>Maximum age limit is relaxable by 3 years for OBC(NCL) and 5 years for SC &amp; ST;</li><li>Maximum age is relaxable by 10 years for PWD:UR, 13 years for PWD:OBC(NCL) and 15 years for PWD: SC/ST;</li><li>Maximum age limit relaxable by 5 years for candidates domiciled in Jammu &amp; Kashmir between 01.01.1980 and 31.12.1989 and candidate has to provide the certificate for the same issued by District Magistrate/Block Development Officer/Sub Divisional Officer at the time of document verification.</li><li>Age relaxation by 5 years for Ex-Servicemen &amp; Commissioned Officers (including ECOs/SSCOs) subject to rendering minimum 5 years military service and fulfillment of other conditions prescribed by Government of India.</li></ul><p><strong>Application fee: –</strong>&nbsp;Application Fee of Rs.300/- (Rs. Three Hundred only) is to be paid through online mode only. However, the SC/ST/PWD/Female candidates are exempted from payment of fee.</p><p><strong>Selection Process: –&nbsp;</strong>As per candidate’s performance in GATE Score 2019.</p><p><strong>Note: –</strong>&nbsp;If you have any query regarding selection process then you must see the notification and read carefully.</p><p><strong>How to apply: –</strong> The candidates can apply online application through the website https://www.aai.aero/ from 03 August 2020 to 15 September 2020.</p><p>&nbsp;</p><p><strong>Important dates for</strong> <strong>Airports Authority of India Vacancy: –</strong></p><ul><li>Starting date for online application – 03 August 2020.</li><li><strong>Extended </strong>Last date for online application – 15 September 2020.</li><li>Availability of Schedule for Document Verification – Will be announced on AAI Website- www.aai.aero.</li></ul><p><strong>Official Notification for Airports Authority of India Vacancy: –</strong></p><p><a href=\"https://www.aai.aero/sites/default/files/examdashboard_pressnote/CORRIGENDUM.pdf\"><strong>Click here for Extended Date Notice.&nbsp;</strong></a><br><strong>Click here for Recruitment Notification. </strong><a href=\"https://www.aai.aero/sites/default/files/examdashboard_advertisement/GATE%202019%20ADVERTISEMENT_0.pdf\"><strong>English</strong></a><strong> | </strong><a href=\"https://www.aai.aero/sites/default/files/examdashboard_advertisement/ADVT%20GATE%202019%20HINDI_0.pdf\"><strong>Hindi</strong></a><br><strong>Click here for Online Application.&nbsp;</strong><a href=\"https://cdn.digialm.com//EForms/configuredHtml/1258/63705/Registration.html\"><strong> Registration</strong></a><strong> | </strong><a href=\"https://cdn.digialm.com//EForms/configuredHtml/1258/63705/login.html\"><strong>Login</strong></a></p><p><strong>About Airports Authority of India Recruitment.</strong><br>The Airports Authority of India (AAI) under the ministry of civil aviation is responsible for creating, upgrading, maintaining and managing civil aviation infrastructure in India.</p>', '2020-09-13', '2020-09-15', '2020-09-30', 'airports-authority-of-india-recruitment-for-180-junior-assistant-vacancy', '2020-09-13 11:46:49', '2020-09-13 11:46:49');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `sir_name` varchar(200) DEFAULT NULL,
  `first_name` varchar(200) DEFAULT NULL,
  `middle_name` varchar(200) DEFAULT NULL,
  `last_name` varchar(200) DEFAULT NULL,
  `father_sir_name` varchar(200) DEFAULT NULL,
  `father_first_name` varchar(200) DEFAULT NULL,
  `father_middle_name` varchar(200) DEFAULT NULL,
  `father_last_name` varchar(200) DEFAULT NULL,
  `mother_sir_name` varchar(200) DEFAULT NULL,
  `mother_first_name` varchar(200) DEFAULT NULL,
  `mother_middle_name` varchar(200) DEFAULT NULL,
  `mother_last_name` varchar(200) DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `dob` varchar(100) DEFAULT NULL,
  `house_no` varchar(200) DEFAULT NULL,
  `street` varchar(200) DEFAULT NULL,
  `landmark` varchar(200) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `pincode` int(11) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `current_house_no` varchar(200) DEFAULT NULL,
  `current_street` varchar(200) DEFAULT NULL,
  `current_landmark` varchar(200) DEFAULT NULL,
  `current_country` varchar(100) DEFAULT NULL,
  `current_city` varchar(100) DEFAULT NULL,
  `current_state` int(11) DEFAULT NULL,
  `current_pincode` int(11) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `alter_email` varchar(50) DEFAULT NULL,
  `mobile` bigint(20) NOT NULL,
  `alter_mobile` bigint(20) DEFAULT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  `policy_conditions` varchar(200) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `registration_no` varchar(250) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `sir_name`, `first_name`, `middle_name`, `last_name`, `father_sir_name`, `father_first_name`, `father_middle_name`, `father_last_name`, `mother_sir_name`, `mother_first_name`, `mother_middle_name`, `mother_last_name`, `gender`, `dob`, `house_no`, `street`, `landmark`, `state`, `city`, `pincode`, `country`, `current_house_no`, `current_street`, `current_landmark`, `current_country`, `current_city`, `current_state`, `current_pincode`, `email`, `alter_email`, `mobile`, `alter_mobile`, `nationality`, `policy_conditions`, `password`, `registration_no`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Mr', 'raju', 'asdf', 'vais', 'Mr', 'asdf', 'asdf', 'asd', NULL, NULL, NULL, NULL, '1', '2005-09-01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'rajuvais@gmail.com', NULL, 7024674550, NULL, NULL, NULL, '$2a$10$n9YatW0lvsKslmWmqnUX4.QIM9mj02JZxCX.KhZK4euV9Kueny5TC', NULL, NULL, '2020-09-14 07:12:44', '2020-09-14 07:12:44');

-- --------------------------------------------------------

--
-- Table structure for table `stu_educations`
--

CREATE TABLE `stu_educations` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `course_name` varchar(200) DEFAULT NULL,
  `roll_no` varchar(50) DEFAULT NULL,
  `board_of_education` varchar(250) DEFAULT NULL,
  `institute` varchar(250) DEFAULT NULL,
  `duration_from` date DEFAULT NULL,
  `duration_to` date DEFAULT NULL,
  `specialization` varchar(200) DEFAULT NULL,
  `course_type` varchar(200) DEFAULT NULL,
  `grading_type` varchar(200) DEFAULT NULL,
  `obtained_mark` varchar(200) DEFAULT NULL,
  `maximum_mark` varchar(200) DEFAULT NULL,
  `percentage` varchar(200) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `uploads`
--

CREATE TABLE `uploads` (
  `id` int(11) NOT NULL,
  `file_title` varchar(200) NOT NULL,
  `file_name` varchar(200) NOT NULL,
  `file_type` varchar(200) DEFAULT NULL,
  `file_size` bigint(20) DEFAULT NULL,
  `student_id` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `applied`
--
ALTER TABLE `applied`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stu_educations`
--
ALTER TABLE `stu_educations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `uploads`
--
ALTER TABLE `uploads`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `applied`
--
ALTER TABLE `applied`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `stu_educations`
--
ALTER TABLE `stu_educations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `uploads`
--
ALTER TABLE `uploads`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `applied`
--
ALTER TABLE `applied`
  ADD CONSTRAINT `applied_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`),
  ADD CONSTRAINT `applied_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`);

--
-- Constraints for table `stu_educations`
--
ALTER TABLE `stu_educations`
  ADD CONSTRAINT `stu_educations_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`);

--
-- Constraints for table `uploads`
--
ALTER TABLE `uploads`
  ADD CONSTRAINT `uploads_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
