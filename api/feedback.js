export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    const { feedback } = req.body;
  
    if (!feedback || feedback.length > 250) {
      return res.status(400).json({ message: 'Invalid feedback.' });
    }
  
    const GITHUB_PAT = process.env.GITHUB_PAT;
    const REPO_OWNER = 'ganesh96'; // Replace with your GitHub username
    const REPO_NAME = 'the-art-of-becoming'; // Replace with your repository name
  
    if (!GITHUB_PAT || !REPO_OWNER || !REPO_NAME) {
      return res.status(500).json({ message: 'Server configuration error.' });
    }
  
    try {
      const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `token ${GITHUB_PAT}`,
        },
        body: JSON.stringify({
          title: `Tree Talk Feedback: ${new Date().toISOString()}`,
          body: feedback,
          labels: ['tree-talk'],
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`GitHub API error: ${errorData.message}`);
      }
  
      res.status(201).json({ message: 'Feedback submitted successfully.' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }