# bundle exec jekyll liveserve

bundle exec jekyll serve --host 0.0.0.0 --port 4000 --livereload

# In your Windows browser, navigate to:http://<YOUR_WSL_IP>:4000/
# Find your WSL IP: ip addr show eth0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}'