del "index.html" /s /f /q
echo ^<!DOCTYPE html^> >> "index.html"
echo ^<html^> >> "index.html"
echo ^<head^> >> "index.html"
echo ^<title^>ohnoitsAvon - Image Dump^</title^> >> "index.html"
echo ^<meta charset="UTF-8"^> >> "index.html"
echo ^</head^> >> "index.html"
echo ^<body^> >> "index.html"
echo ^<h1^>ohnoitsAvon - Image Dump^</h1^> >> "index.html"
for %%I in (.) do echo ^<h2^>%%~nxI^</h2^> >> "index.html"
setlocal disableDelayedExpansion
for /f "delims=" %%A in ('forfiles /s /m *.* /c "cmd /c echo @relpath"') do (
  set "file=%%~A"
  setlocal enableDelayedExpansion
  IF NOT "!file:~2!"=="genhtml.bat" (
    IF NOT "!file:~2!"=="index.html" (
	echo ^<a href="!file:~2!" target="_blank"^>^<img src="!file:~2!"^ style="width:100px"^>!file:~2!^</a^>^<br^> >> "index.html"
    )
  )
  endlocal
)
echo ^</body^> >> "index.html"
echo ^</html^> >> "index.html"