 function setTheme(theme) {
            const titleElement = document.querySelector('.title');
            const categoryTitles = document.querySelectorAll('.category .title');

            if (theme === 'dark') {
                document.body.style.backgroundColor = '#2c2c2c';
                document.body.style.color = '#fff';
                document.querySelectorAll('.glow-on-hover').forEach(button => {
                    button.style.backgroundColor = '#1a1a1a';
                });
                document.querySelectorAll('.site-info').forEach(info => {
                    info.style.color = '#fff';
                });
                categoryTitles.forEach(title => {
                    title.style.color = '#fff';
                });
                if (titleElement) {
                    titleElement.style.color = '#fff';
                }
                document.querySelectorAll('.Tema-Ayarları button').forEach(button => {
                    button.style.backgroundColor = '#444';
                    button.style.color = '#fff';
                });
            } else if (theme === 'light') {
                document.body.style.backgroundColor = '#fff';
                document.body.style.color = '#2c2c2c';
                document.querySelectorAll('.glow-on-hover').forEach(button => {
                    button.style.backgroundColor = '#1a1a1a';
                });
                document.querySelectorAll('.site-info').forEach(info => {
                    info.style.color = '#2c2c2c';
                });
                categoryTitles.forEach(title => {
                    title.style.color = '#2c2c2c';
                });
                if (titleElement) {
                    titleElement.style.color = '#2c2c2c';
                }
                document.querySelectorAll('.Tema-Ayarları button').forEach(button => {
                    button.style.backgroundColor = '#444';
                    button.style.color = '#fff';
                });
            }
        }