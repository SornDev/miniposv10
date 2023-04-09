<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use JWTAuth;

class UserController extends Controller
{
    //

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    public function register(Request $request){
        // return "Ok Register!!";

        try{

            $check_email = User::where("email",$request->email);

            if($check_email->count()){
                $success = false;
                $message = "ອີເມວລ໌ນິ້: ".$request->email." ໄດ້ເຄີຍລົງທະບຽນ!";
            } else {

                $user = new User();
                $user->name = $request->name;
                $user->email = $request->email;
                $user->password = hash::make($request->password);
                $user->save();

                $success = true;
                $message = "ບັນທຶກຂໍ້ມູນສຳເລັດ!";

            }

        } catch (\Illuminate\Database\QueryException $ex){
            $success = false;
            $message = $ex->getMessage();
        }

        $response = [
            "success" => $success,
            "message" => $message
        ];

        return response()->json($response);


    }

    public function login(Request $request){

        $check_user_login = [
            "email"=>$request->email,
            "password"=>$request->password
        ];

        $token = JWTAuth::attempt($check_user_login);
        $user = Auth::user();

        if(!$token){

            return response()->json([
                'success' => false,
                'message' => 'ອີເມວລ໌ ຫຼືລະຫັດຜ່ານຂອງທ່ານ ບໍ່ຖຶກຕ້ອງ!',
            ], 401);

        } else {

            return response()->json([
                'success' => true,
                'message' => 'ການເຂົ້າສູ່ລະບົບ ບໍ່ສຳເລັດ!',
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]);

        }
    }

    public function logout(){

       
        $token = Auth::getToken();
        $invalidate = Auth::invalidate($token);

        if($invalidate) {
           return response()->json([
               'success' => true,
               'message' => 'Successfully logged out',
           ]);
        }

    }

    // public function refresh()
    // {
    //     return response()->json([
    //         'status' => 'success',
    //         'user' => Auth::user(),
    //         'authorisation' => [
    //             'token' => Auth::refresh(),
    //             'type' => 'bearer',
    //         ]
    //     ]);
    // }
}
