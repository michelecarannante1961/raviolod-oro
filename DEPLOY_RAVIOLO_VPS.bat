@echo off
chcp 65001 >nul
title Deploy Sito Raviolo d'Oro su VPS 69.62.111.38
cls
echo ==============================================================================
echo       DEPLOY SITO RISTORANTE RAVIOLO D'ORO SU VPS HOSTINGER (69.62.111.38)
echo ==============================================================================
echo.
echo Verranno eseguiti i seguenti passaggi:
echo  1. Creazione cartella /var/www/raviolodoro sul server VPS
echo  2. Upload dei file (HTML, CSS, JS, Immagini Assets) via SCP
echo  3. Configurazione Nginx per raviolodoro (.com/.it) + porta di test 8080
echo  4. Test e Ricarica Nginx
echo.
echo Quando richiesto da OpenSSH, inserisci la password di root della VPS.
echo.
pause

echo.
echo [1/4] Creazione cartella di destinazione su VPS...
ssh root@69.62.111.38 "mkdir -p /var/www/raviolodoro /etc/nginx/sites-available /etc/nginx/sites-enabled"

echo.
echo [2/4] Caricamento file del sito via SCP...
scp -r "D:\TEST\2026-09-25\raviolod-oro\*" root@69.62.111.38:/var/www/raviolodoro/

echo.
echo [3/4] Installazione configurazione Nginx...
ssh root@69.62.111.38 "cp /var/www/raviolodoro/nginx_raviolodoro.conf /etc/nginx/sites-available/raviolodoro && ln -sf /etc/nginx/sites-available/raviolodoro /etc/nginx/sites-enabled/raviolodoro && nginx -t && systemctl reload nginx"

echo.
echo ==============================================================================
echo [4/4] DEPLOY COMPLETATO CON SUCCESSO!
echo ==============================================================================
echo.
echo 1. TEST IMMEDIATO SULLA VPS:
echo    Puoi testare subito il sito aprendo nel browser:
echo    http://69.62.111.38:8080
echo.
echo 2. PUNTAMENTO DOMINIO:
echo    Appena acquisti il dominio (es. raviolodoro.com / raviolodoro.it),
echo    imposta nel pannello DNS:
echo       Tipo: A     | Host: @    | Valore: 69.62.111.38
echo       Tipo: CNAME | Host: www  | Valore: raviolodoro.com
echo.
echo 3. ATTIVAZIONE CERTIFICATO SSL GRATUITO (HTTPS):
echo    Una volta propagato il dominio, collegati via SSH ed esegui:
echo       certbot --nginx -d raviolodoro.com -d www.raviolodoro.com
echo.
echo Premere un tasto per uscire...
pause >nul
