---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a Ph.D. student in Robotics at the Georgia Institute of Technology and a robotics research engineer with **6+ years of industry experience** in autonomous driving. In the last full-time position, I led the Mapping and Localization team at HoloMatic, delivering production Autonomous Valet Parking and Highway Pilot systems to automotive-grade, safety-critical standards (see [Work Experience](#-work-experience) below for details).

My research develops efficient, task-driven SLAM algorithms for long-term robot autonomy, building directly on that production experience: combining industry leadership with academic research to bridge real-world deployment and cutting-edge advances in SLAM, perception, and robotics.

My research interests include **Visual and Semantic SLAM, Multi-Sensor Fusion, and Robot Perception**. Currently, I am focusing on Task-Driven SLAM to enable Long-Term Robot Autonomy, and following developments in neural scene representations (3D Gaussian Splatting, NeRF) and foundation models for robotics as they intersect with SLAM.


<!-- <span style="color:#1f77b4; font-weight:600;"> -->
<span style="color:#FF0000; font-weight:600;">
I am open to **full-time** opportunities Perception and Robotics, as well as Spring 2027 **research internships**.
</span>
I would be happy to discuss research collaborations, internships, or full-time opportunities. Feel free to reach out.


# 🛠 Technical Skills

- **Localization & SLAM**: Visual & LiDAR SLAM, Visual-Inertial Odometry (VIO), Semantic SLAM, Multi-Sensor Fusion, Bundle Adjustment, Factor Graphs, Kalman Filtering, Place Recognition
- **Perception & Computer Vision**: 3D Reconstruction, Feature Detection/Matching, Camera/LiDAR/IMU Calibration, Point Cloud Processing
- **Machine Learning**: PyTorch, ONNX Runtime, Learned Feature Matching (SuperPoint, SuperGlue, LightGlue), Self-Supervised Vision (DINO)
- **Software Engineering**: C++, Python, ROS/ROS2, real-time embedded systems
- **Libraries & Tools**: GTSAM, Ceres, OpenCV, PCL, Eigen
- **Domains**: Autonomous Driving, Mobile & Legged Robotics

<!-- I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->

<!-- 
# 🔥 News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 💻 Work Experience

- *2026.05 - 2026.08*, **Software Engineering Intern, Robotics Mapping and Localization**, General Motors, Mountain View, CA
  - Developed LiDAR mapping/localization pipelines and place recognition for autonomous mobile robots, deployed on embedded hardware for real-time closed-loop navigation.
- *2017.07 - 2021.12*, **Senior Research Engineer — Team & Project Lead, Mapping and Localization**, HoloMatic Inc.
  - Led a cross-functional engineering team across mapping, localization, and calibration to deliver production AVP and Highway Pilot systems, including visual/LiDAR mapping, VIO, multi-sensor fusion, and Semantic SLAM, achieving ~10cm APE and RPE competitive with top-5 KITTI odometry benchmark results.
  - Enforced automotive-grade, safety-critical C++ coding standards (MISRA/AUTOSAR-style: static memory allocation, strict typing, memory alignment) across the production codebase.
- *2016.06 - 2017.06*, **Software Engineer, Autonomous Driving Team**, LeEco Inc.
  - Developed camera calibration, stereo visual odometry, and feature-map-based localization; maintained a production vision/geometry library used across the perception stack at scale.
- *2015.08 - 2016.05*, **Senior Research Engineer, Robotics Team**, Institute of Deep Learning (IDL), Baidu Inc.
  - Developed unified calibration framework for camera/LiDAR/IMU intrinsics and extrinsics; integrated global path planning for aerial and ground autonomy.
- *2014.06 - 2015.07*, **Robotics Specialist**, PRECISE Center, University of Pennsylvania
  - Developed vision-based localization and uncertainty-aware planning for mobile/aerial robots, including an EKF visual-inertial SLAM system deployed on AR.Drone and MAGIC ground-vehicle platforms.

# 📖 Education
- *2022.01 - now*,       PhD in Robotics, IRIM, Georgia Institute of Technology.
- *2012.09 - 2014.05*,   MS in Robotics, GRASP Lab, University of Pennsylvania.
- *2008.09 - 2012.07*,   BS in Mechanical Engineering, Northeastern University (CHINA).

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

<!-- # 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📝 Publications 

<!-- GoodWeights -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICRA 2026 Accepted</div><video src='images/ICRA2026/GW_demo.mp4' poster='images/ICRA2026/GW_demo_poster.jpg' width="100%" autoplay loop muted playsinline></video></div></div>
<div class='paper-box-text' markdown="1">

[**Title**] Good Weights: Proactive, Adaptive Dead Reckoning Fusion for Continuous and Robust Visual SLAM 

[**Author**] **Yanwei Du**, Jing-Chen Peng, Patricio A. Vela.

[**Description**]
The Good Weights algorithm described here provides a framework
to adaptively integrate dead reckoning (DR) with passive
visual SLAM for continuous and accurate frame-level pose
estimation. Importantly, it describes how all modules in a
comprehensive SLAM system must be modified to incorporate
DR into its design. Adaptive weighting increases DR influence
when visual tracking is unreliable and reduces when visual
feature information is strong, maintaining pose track without
overreliance on DR.

[Paper](https://arxiv.org/abs/2509.22910)&nbsp;&nbsp;&nbsp;&nbsp;
<!-- [Code](https://github.com/ivalab/task_driven_slam_benchmarking.git)&nbsp;&nbsp;&nbsp;&nbsp; -->
<!-- [Result](https://github.com/ivalab/task_driven_slam_benchmarking/tree/main/media/results/realworld) -->

</div>
</div>

<!-- TaskDrivenSLAMBenchmarking -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IROS 2025 Accepted</div><video src='images/IROS2025/taskbench_demo.mp4' poster='images/IROS2025/taskbench_demo_poster.jpg' width="100%" autoplay loop muted playsinline></video></div></div>
<div class='paper-box-text' markdown="1">

[**Title**] Task-Driven SLAM Benchmarking for Robot Navigation

[**Author**] **Yanwei Du**, Shiyu Feng, Carlton G. Cort, Patricio A. Vela.

[**Description**]
We propose a benchmarking framework for evaluating SLAM methods.
The framework accounts for SLAM's mapping capabilities, employs precision as a key metric. 
The benchmarking approach offers a more relevant and accurate assessment of SLAM performance in task-driven applications.

[Paper](https://arxiv.org/abs/2409.16573)&nbsp;&nbsp;&nbsp;&nbsp;
[Code](https://github.com/ivalab/task_driven_slam_benchmarking.git)&nbsp;&nbsp;&nbsp;&nbsp;
[Result](https://github.com/ivalab/task_driven_slam_benchmarking/tree/main/media/results/realworld)

</div>
</div>


<!-- GoodGraph -->
<div class='paper-box'><div class='paper-box-image'><div style="display:flex; flex-direction:column; gap:8px;"><div class="badge">Internal Review</div><img src='images/GoodGraph/GG_selection.JPG' alt="sym" width="100%"><img src='images/GoodGraph/GG_performance.JPG' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**Title**] Good Graph: Budget-Aware Bundle Adjustment in Visual SLAM

[**Author**] **Yanwei Du**, Yipu Zhao,  Justin S. Smith, Patricio A. Vela.

[**Description**]
Good Graph is designed to address the critical challenge of computational cost in Visual SLAM back-end optimization.
By intelligently capping the problem size while preserving the conditioning of the optimization, 
it ensures that the back-end remains efficient without sacrificing accuracy. 
This approach guarantees that the tracking thread receives an up-to-date and accurate map in real time, 
especially in budget-critical case, thereby enhancing both the accuracy and robustness of the overall Visual SLAM system.

<!-- [Paper](https://arxiv.org/abs/2409.16573)&nbsp;&nbsp;&nbsp;&nbsp; -->
<!-- [Code](https://github.com/ivalab/task_driven_slam_benchmarking.git)&nbsp;&nbsp;&nbsp;&nbsp; -->
<!-- [Result](https://github.com/ivalab/task_driven_slam_benchmarking/tree/main/media/results/realworld) -->

</div>
</div>

<!-- ROMDP_UAV -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACC 2016 Accepted</div><img src='images/ACC2016/romdp_quadrotor.png' alt="sym" width="70%"></div></div>
<div class='paper-box-text' markdown="1">

[**Title**] A Stochastic Approach for Attack Resilient UAV Motion Planning

[**Author**] Nicola Bezzo, James Weimer, **Yanwei Du**, Oleg Sokolsky, Sang H. Son, Insup Lee.

[**Description**] In this paper we propose a stochastic strategy named 
Redundant Observable MDPs(ROMDPs) for motion planning of unmanned 
aerial vehicles (UAVs) subject to unreliable sensors measurements.

[Paper](https://ieeexplore.ieee.org/abstract/document/7525108)

</div>
</div>

# 💬 Research Statement

Simultaneous Localization and Mapping (SLAM) has long been a cornerstone of robotics research, with significant advancements focusing on achieving sub-millimeter accuracy in mapping and localization. However, for robots executing real-world tasks, **Repeatability**, **Reliability**, and **Task Success** take precedence over absolute accuracy. This shift in focus necessitates a paradigm change in SLAM research: from accuracy-driven designs to task-driven SLAM systems tailored to specific robotic applications.

My research direction lies in designing **hierarchical, task-driven** systems that dynamically adapt their performance to the demands of the task. This hierarchical design incorporates multiple estimation modules optimized for different objectives, including: 
1) **Topological Localization**: Providing high-level, coarse-grained location estimates for efficient long-range navigation and situational awareness.
2) **Local Environment Sensing**: Offering detailed, localized feedback for tasks requiring high accuracy, such as obstacle avoidance or manipulation.
By combining these modules, the system can achieve an adaptive balance between robustness and efficiency while maintaining bounded computational costs. 

This task-driven SLAM framework is a step toward building robust, scalable systems capable of long-term autonomy. It ensures that the system’s design is inherently tied to the tasks it performs, allowing for practical, reliable operation across diverse environments and use cases. My research aims to explore and implement this novel paradigm, advancing the capabilities of robots to operate seamlessly in dynamic, task-oriented scenarios — a direction informed directly by my production experience deploying safety-critical SLAM systems in automotive environments.

<!-- The necessity for such a design perspective stems directly from the requirements of task execution. For example:

In Open Spaces: High mapping accuracy is often unnecessary. Instead, the system's robustness in ensuring collision-free navigation is more critical. A coarse localization and map suffice as long as obstacles are avoided.

For Lane-Following Vehicles: In structured environments such as roads, SLAM systems need to provide fast, localized feedback with minimal computational overhead. Sparse features and local environmental cues enable the vehicle to maintain its trajectory along lanes effectively, with limited reliance on detailed maps.

In Fine-Grained Execution Tasks: Tasks requiring precision, such as robotic manipulation or clustering operations, demand accurate state estimation. Here, SLAM systems must shift to provide finer-grained localization and mapping to meet the task’s precision requirements. -->

# 📄 Resume

<!-- Not attached yet -- revising content. Uncomment once finalized:
📄 [Resume (industry-focused, PDF)](files/duyanwei_resume.pdf) &nbsp;&nbsp;•&nbsp;&nbsp; [CV (academic, PDF)](files/duyanwei_cv.pdf)
-->

# 🤖 Robotic Platforms

<div class='paper-box'><div class='paper-box-image'><div><img src='images/turtlebot_real.jpg' alt="sym" width="100%" style="max-width:260px;"></div></div>
<div class='paper-box-text' markdown="1">

[**Title**] Custom TurtleBot-Based SLAM Platform

[**Description**]
I design and build custom ground-robot platforms based on the TurtleBot, outfitted with a Velodyne LiDAR, stereo/RGB-D cameras, and a monocular camera on a custom sensor mast, which I integrate and calibrate for closed-loop SLAM evaluation. These platforms serve as the real-robot testbed for my published work, including the [Task-Driven SLAM Benchmarking](#-publications) framework (IROS 2025).

</div>
</div>

<!-- RESERVED: LiDAR mapping demo card. Drop in images/Robots/turtlebot_mapping.gif (point cloud building live) and/or images/Robots/turtlebot_map.jpg (top-down finished-map screenshot), then uncomment:
<div class='paper-box'><div class='paper-box-image'><div><img src='images/Robots/turtlebot_mapping.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**Title**] LiDAR Mapping with the TurtleBot Platform

[**Description**]
[fill in once assets are in]

</div>
</div>
-->

