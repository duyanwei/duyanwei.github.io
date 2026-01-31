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

I am a Ph.D. student in Robotics at the Georgia Institute of Technology. My research is to develop efficient SLAM algorithms for robot navigation.

Before pursuing my Ph.D., I worked in the Autonomous Driving industry for several years, where I gained extensive experience in leading software engineering efforts and fostering collaboration within cross-functional teams. My contributions spanned multiple advanced projects, including sensor extrinsic and intrinsic calibration, LiDAR-based mapping, visual feature-based mapping and localization, monocular visual-inertial odometry, and Semantic SLAM. These projects were primarily focused on highway scenarios and autonomous valet parking systems, where SLAM accuracy and robustness were critical.

This combination of industrial experience, leadership skills, and academic research equips me with a well-rounded perspective on real-world applications and cutting-edge advancements in robotics and autonomous systems.

My research interests include Visual and Semantic SLAM, Robotics and Computer Vision. Currently, I am focusing on **Task-Driven SLAM to enable Long-Term Robot Autonomy**.

<!-- I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->

<!-- 
# 🔥 News
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📝 Publications 

<!-- TaskDrivenSLAMBenchmarking -->
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICRA 2025 Submitted</div><img src='images/ICRA2025/wpts_0_5.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[**Title**] Task-Driven SLAM Benchmarking

[**Author**] **Yanwei Du**, Shiyu Feng, Carlton G. Cort, Patricio A. Vela.

[**Description**]
We propose a benchmarking framework for evaluating SLAM methods.
The framework accounts for SLAM's mapping capabilities, employs precision as a key metric. 
The benchmarking approach offers a more relevant and accurate assessment of SLAM performance in task-driven applications.

[Paper](https://arxiv.org/abs/2409.16573)&nbsp;&nbsp;&nbsp;&nbsp;
[Code](https://github.com/ivalab/task_driven_slam_benchmarking.git)&nbsp;&nbsp;&nbsp;&nbsp;
[Result](https://github.com/ivalab/task_driven_slam_benchmarking/tree/main/results/realworld)

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

<!-- # 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📝 Professional Projects

<div class='paper-box'><div class='paper-box-image'><div><img src='images/VIO/vio.gif' alt="sym" width="60%"></div></div>
<div class='paper-box-text' markdown="1">

[**Title**] Visual-Inertial Odometry for Autonomous Driving

<!-- [**Date**] *2018.07 - 2019.07* -->

[**Role**] Lead Software Engineer

[**Description**]
The project is designed for autonomous driving vehicles in highway scenarios, where real-time, accurate and robust state estimation is a critical requirement. The system employs a fixed-lag smoothing using iSAM2 with the GTSAM library. The framework incorporates pre-integrated IMU and vehicle speed measurements, addressing the limitations of vision-only systems. It also includes an OpenGL-based visualization tool for monitoring of feature tracks, landmarks, and vehicle trajectories, providing actionable insights into system performance.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><img src='images/VIO/vio.gif' alt="sym" width="60%"></div></div>
<div class='paper-box-text' markdown="1">

[**Title**] Online Camera-IMU Calibration for Autonomous Driving

<!-- [**Date**] *2018.07 - 2019.07* -->

[**Role**] Lead Software Engineer

[**Description**]
Designed a module for continuous camera-IMU extrinsic calibration, ensuring long-term operational reliability.
</div>
</div>


# 📖 Education
- *2022.01 - now*,       PhD in Robotics, IRIM, Georgia Institute of Technology.
- *2012.09 - 2014.05*,   MS in Robotics, GRASP Lab, University of Pennsylvania.
- *2008.09 - 2012.07*,   BS in Mechanical Engineering, Northeastern University (CHINA).

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->

# 💻 Work Experience
- *2017.07 - 2021.12*, Senior Software Engineer, HoloMatic. Inc.
- *2016.06 - 2017.06*, Software Engineer, Autonomous Driving Team, LeEco. Inc.
- *2015.08 - 2016.05*, Research Engineer, Robotics Team, Institute of Deep Learning (IDL), Baidu. Inc.
- *2014.06 - 2015.07*, Robotics Specialist, PRECISE Center, University of Pennsylvania.

# 💬 Research Statement

Simultaneous Localization and Mapping (SLAM) has long been a cornerstone of robotics research, with significant advancements focusing on achieving sub-millimeter accuracy in mapping and localization. However, for robots executing real-world tasks, **Repeatability**, **Reliability**, and **Task Success** take precedence over absolute accuracy. This shift in focus necessitates a paradigm change in SLAM research: from accuracy-driven designs to task-driven SLAM systems tailored to specific robotic applications.

The research direction lies in designing hierarchical, task-driven systems that dynamically adapt their performance to the demands of the task. This hierarchical design incorporates multiple estimation modules optimized for different objectives, including: 
1) Topological Localization: Providing high-level, coarse-grained location estimates for efficient long-range navigation and situational awareness.
2) Local Environment Sensing: Offering detailed, localized feedback for tasks requiring high accuracy, such as obstacle avoidance or manipulation.
By combining these modules, the system can achieve an adaptive balance between robustness and efficiency while maintaining bounded computational costs. 

This task-driven SLAM framework is a step toward building robust, scalable systems capable of long-term autonomy. It ensures that the system’s design is inherently tied to the tasks it performs, allowing for practical, reliable operation across diverse environments and use cases. My research aims to explore and implement this novel paradigm, advancing the capabilities of robots to operate seamlessly in dynamic, task-oriented scenarios.

<!-- The necessity for such a design perspective stems directly from the requirements of task execution. For example:

In Open Spaces: High mapping accuracy is often unnecessary. Instead, the system's robustness in ensuring collision-free navigation is more critical. A coarse localization and map suffice as long as obstacles are avoided.

For Lane-Following Vehicles: In structured environments such as roads, SLAM systems need to provide fast, localized feedback with minimal computational overhead. Sparse features and local environmental cues enable the vehicle to maintain its trajectory along lanes effectively, with limited reliance on detailed maps.

In Fine-Grained Execution Tasks: Tasks requiring precision, such as robotic manipulation or clustering operations, demand accurate state estimation. Here, SLAM systems must shift to provide finer-grained localization and mapping to meet the task’s precision requirements. -->
 
 
 
 
 
 
 
 
 
