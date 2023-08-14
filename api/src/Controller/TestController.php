<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends AbstractController
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    #[Route('test', name: 'app_test')]
    public function index(Request $request): JsonResponse
    {
        $test = 1;
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path'    => 'src/Controller/TestController.php',
        ]);
    }
}
